import Properties from "@/components/Properties";

const PropertiesPage = ({ searchParams: { page = 1, pageSize = 6 } }) => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <h1 className="text-white text-center text-2xl font-semibold">
          Properties
        </h1>
      </section>
      <Properties page={parseInt(page)} pageSize={parseInt(pageSize)} />
    </>
  );
};

export default PropertiesPage;
