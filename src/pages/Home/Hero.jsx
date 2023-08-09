import { Link, Route, Routes } from "react-router-dom";
import HeroImage from "../../assets/images/hero.png";
import Prodcuts from "../Products/Products";

const Hero = () => {
  return (
    <div className="hero relative">
      <div className="container mx-auto">
        <div className="py-52 px-4 lg:px-0 w-full lg:w-1/2 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Scandinavian Supremacy
          </h1>
          <p className="mt-9 text-2xl font-medium">
            At miralou we have turned traditional skin care ingredients lists on
            its head
          </p>
          <Link to="/Products" ><button className="mt-12 bg-yellow-300 px-20 py-3">Buy Now</button></Link>
          <Routes>
            <Route path="/Products" element={<Prodcuts />} />
          </Routes>
        </div>
        <img
          src={HeroImage}
          alt="hero"
          className="absolute inset-0 h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
