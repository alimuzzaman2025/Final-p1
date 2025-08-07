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
      className="absolute top-[50%] left-[30px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer z-[1]"

      onClick={onClick}
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
      <Home />

      <Container className={"py-15"}>
        <h1 className="py-4 font-bold font-dm">New Arrivals</h1>

        <Slider className="flex justify-between" {...settings}>


          {data.map((item) => (
            <div className="w-3/12 pl-3 bg-[rgba(244,244,244,0.61)] py-4">
              <>
                

                <button className="border-[2px] py-2 px-10 bg-[#000] text-[#fff]">10%</button>
                
                <img className="w-[300px] h-[320px]" src={item.thumbnail} alt="" />
                <div className="pr-14">

                  <div className="flex items-center gap-2 justify-end">
                    <p>Add to Wish List</p>
                    <HiHeart />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <p>Compare</p>
                    <IoGitCompare />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <p className="font-bold">Add to Cart</p>
                    <FaCartShopping />
                  </div>

                </div>
                <div className="flex justify-between pr-15 pt-10">
                  <div className="">Basic Crew Neck Tee</div>
                  <div className="">$44.00</div>
                </div>
                <div className="">Black</div>
              </>
            </div>
          ))}



        </Slider>
      </Container>
    </>
  )
}

export default App
