import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

/**
 * Header
 *  - Logo
 *  - Nav Items(Right Side)
 *  - Cart
 *
 * Body
 *  - Search Bar
 *  - RestrauntList
 *    - RestrauntCard - Many Cards
 *        - Image
 *        - name
 *        - Rating
 *        - Cusines
 *
 * Footer
 *  - links
 *  - copyright
 */
