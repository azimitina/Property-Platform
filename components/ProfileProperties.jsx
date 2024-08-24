"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import deleteProperty from "@/app/actions/deleteProperty";
import { toast } from "react-toastify";

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    confirm("Are you sure you want to delete this property?");

    if (!confirm) {
      return;
    }

    await deleteProperty(propertyId);

    const updateProperties = properties.filter(
      (property) => property._id !== propertyId
    );

    setProperties(updateProperties);

    toast.success("Property deleted successfully");
  };

  return properties.map(({ _id, images, name, location }) => (
    <div key={_id} className="mb-10">
      <Link href={`/properties/${_id}`}>
        <Image
          className="h-64 w-full rounded-md object-cover"
          src={images[0]}
          width={800}
          height={500}
          alt={name}
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-600">
          Address: {location.street} {location.city} {location.state}{" "}
        </p>
      </div>
      <div className="mt-2">
        <a
          href="/add-property.html"
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </a>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
          onClick={() => handleDeleteProperty(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
