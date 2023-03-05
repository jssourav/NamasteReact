import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart")); // import - this is a promise
const About = lazy(() => import("./components/About"));

/**
 * chunking
 * Code Spliting
 * Dynamic Bundling
 * Lazy loading
 * On Demand Loading
 *
 **/

// On ondemand loading -> upon render -> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Sourav Nag",
    email: "sn.sourav1993@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // dont put /...
            element: <Profile name={"Sourav"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

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
