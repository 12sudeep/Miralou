import Hero from "./Hero"
import Women from "../../assets/images/category1.png"
import Men from "../../assets/images/category2.png"
import PregnantWomen from "../../assets/images/category3.png"
import Child from "../../assets/images/category4.png"

const CategoryCard = ({ category }) => {
  return (
    <div className="relative flex justify-center">
      {category.image}
      <div className="absolute bg-gray-300 px-14 py-4 -bottom-6">
        {category.category}
      </div>
    </div>
  )
}

const Home = () => {
  const categories = [
    {
      category: "For Women",
      image: <img src={Women} alt="Women" />
    },
    {
      category: "For Men",
      image: <img src={Men} alt="Men" />
    },
    {
      category: "For Pregnant Women",
      image: <img src={PregnantWomen} alt="For Pregnant Women" />
    },
    {
      category: "For Children",
      image: <img src={Child} alt="For Children" />
    }
  ]

  return (
    <>
      <Hero />
      <section>
        <div className="container mx-auto py-36">
          <div className="flex justify-between">
            {categories.map((category) => {
              return <CategoryCard category={category} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
