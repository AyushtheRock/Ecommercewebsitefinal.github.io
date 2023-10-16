import React from "react";
import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Laptops from "./pages/Laptops";
import Sports from "./pages/Sports";
import Tv from "./pages/Tv";
import Speakers from "./pages/Speakers";
import Homeitems from "./pages/Homeitems";
import Headphones from "./pages/Headphones";
import Gaming from "./pages/Gaming";
import Camera from "./pages/Camera";
import Accesories from "./pages/Accesories";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="laptop" element={<Laptops />} />
          <Route path="sports" element={<Sports />} />
          <Route path="tv" element={<Tv />} />
          <Route path="speaker" element={<Speakers />} />
          <Route path="homeitems" element={<Homeitems />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="camera" element={<Camera />} />
          <Route path="acce" element={<Accesories />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
