import { useContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ApiData } from "./components/ContextApi";
import Container from "./components/Container";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { HiHeart } from "react-icons/hi";
import { IoGitCompare } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import Product from "./pages/Product";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import ProductDetails from "./pages/ProductDetails";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
  </Route>
))





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-[30px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer"

      onClick={onClick}
    >
      <GrFormNext className="inline-block" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-[30px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer z-[1]" onClick={onClick}
    >
      <GrFormPrevious className="inline-block" />
    </div>
  );
}


function App() {
  let data = useContext(ApiData)
  var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
    



