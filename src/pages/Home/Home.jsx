import Hero from "./Hero";
import Women from "../../assets/images/category1.png";
import Men from "../../assets/images/category2.png";
import PregnantWomen from "../../assets/images/category3.png";
import Child from "../../assets/images/category4.png";
import NewArrials from "./NewArrivals";
import LatestNews from "./LatestNews";
import SubscriptionSection from "./Subscription";
import { useEffect, useState } from "react";
import axios from "axios";
import { setDate } from "date-fns";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative flex justify-center w-full md:w-1/2 lg:w-1/4 px-1 my-4">
      <img src={category.image} alt="category" className="w-full" />
      <div className="absolute bg-gray-300 px-14 py-4 -bottom-6">
        {category.name}
      </div>
    </div>
  );
};

const Home = () => {
const[data,setData] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/home").then((response) => {
      return (
        response.data
      );
    }).then((data) => {
      setData(data.data)
    });

  }, []);

console.log(data)

  const categories = data ? data.categories : [];

  return (
    <>
      <Hero />
      <section>
        <div className="container mx-auto py-36 px-4 lg:px-0">
          <div className="flex flex-wrap justify-between">
            {categories.map((category) => {
              return <CategoryCard category={category} />;
            })}
          </div>
        </div>
      </section>
      <NewArrials />
      <LatestNews />
      <SubscriptionSection />
    </>
  );
};

export default Home;
