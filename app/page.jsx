import Link from "next/link";

const HomePage = () => {
  console.log("Hey there");
  return (
    <div>
      <h1 className="text-2xl">Home Page</h1>
      <Link
        href={{
          pathname: "/properties",
          query: { filter: "all" },
        }}
      >
        Properties
      </Link>
    </div>
  );
};

export default HomePage;
