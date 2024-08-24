"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteProperty = async (propertyId) => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("You need to be logged in to delete a property");
  }

  const { userId } = sessionUser;

  await connectDB();
  const property = await Property.findById(propertyId);

  if (!property) {
    throw new Error("Property not found");
  }

  if (property.owner.toString() !== userId) {
    throw new Error("You are not authorized to delete this property");
  }

  //Extract public ID from images array
  const publicIds = property.images.map((imageUrls) => {
    const parts = imageUrls.split("/");
    return parts.at(-1).split(".").at(0);
  });

  //Delete images from Cloudinary
  if (publicIds.length) {
    for (const publicId of publicIds) {
      await cloudinary.uploader.destroy(`propertyplatform/${publicId}`);
    }
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
};

export default deleteProperty;
