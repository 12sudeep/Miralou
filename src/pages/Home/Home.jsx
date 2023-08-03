import Hero from "./Hero"
import Women from "../../assets/images/category1.png"
import Men from "../../assets/images/category2.png"
import PregnantWomen from "../../assets/images/category3.png"
import Child from "../../assets/images/category4.png"

const CategoryCard = ({ category }) => {
  return (
    <div className="relative flex justify-center w-full md:w-1/2 lg:w-1/4 px-1 my-4">
      <img src={category.image} alt="category" className="w-full" />
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
      image: Women
    },
    {
      category: "For Men",
      image: Men
    },
    {
      category: "For Pregnant Women",
      image: PregnantWomen
    },
    {
      category: "For Children",
      image: Child
    }
  ]

  return (
    <>
      <Hero />
      <section>
        <div className="container mx-auto py-36 px-4 lg:px-0">
          <div className="flex flex-wrap justify-between">
            {categories.map((category) => {
              return <CategoryCard category={category} />
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 container mx-auto">
          <h2 className="text-6xl text-center">New Arrivals</h2>
          <p className="text-center w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi enim. Duis in tortor sit amet turpis rutrum fermentum
            in non arcu. Praesent porta auctor odio a suscipit. Quisque sagittis suscipit ultricies.</p>
        </div>
      </section>
    </>
  )
}

export default Home
