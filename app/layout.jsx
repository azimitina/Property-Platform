import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Platform",
  keywords: "real estate, property, buy, sell, rental",
  description: "A platform for buying, selling, and renting properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
