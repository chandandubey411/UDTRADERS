import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navber";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import CategoryProducts from "./components/CategoryProducts";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Gallery />
          <Reviews />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Products />
          <Footer />
        </>
      ),
    },
    {
      path: "/products/:category",
      element: (
        <>
          <Navbar />
          <CategoryProducts />
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "/reviews",
      element: (
        <>
          <Navbar />
          <Reviews />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
