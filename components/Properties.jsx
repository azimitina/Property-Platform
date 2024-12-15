import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Pagination from "./Pagination";

const Properties = async ({ page, pageSize }) => {
  await connectDB();

  const skip = (page - 1) * pageSize;
  const totalItems = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize);

  const totalPages = Math.ceil(totalItems / pageSize);

  const showPagination = totalItems > pageSize && page <= totalPages;

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
        {showPagination && (
          <Pagination
            totalItems={parseInt(totalItems)}
            page={parseInt(page)}
            pageSize={parseInt(pageSize)}
          />
        )}
      </div>
    </section>
  );
};

export default Properties;
