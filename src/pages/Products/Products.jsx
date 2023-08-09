import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { classNames } from "../../utils/class-names";
import { StarIcon as StarFilledIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";



const Prodcuts = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/products?page=1&take=20").then((response) => {
      return (
        response.data
      );
    }).then((data) => {
      setData(data.data)
    });
  }, []);

  console.log(data)

  const productss = data ? data : [];

  return (
    <div className="py-10 container mx-auto">
      <h2 className="text-6xl text-center">Products</h2>
      <p className="text-center w-full lg:w-1/2 px-4 lg:px-0 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
        enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
        Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
        ultricies.
      </p>

      <div className="mt-10 text-sm px-8 lg:px-0">
        {productss.map((product, id) => (
          <div key={id} className={classNames("grid grid-cols-1 py-[4rem] px-[3rem] lg:grid-cols-2 ")} >
            <img
              src={product.image}
              alt="product"
              className="w-full lg:object-cover lg:object-center lg:h-[60vh] lg:w-[30rem]"
            />
            <div className="">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="mt-[1rem]" >
                freestar
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p></div>
              <div className="flex items-center mt-2">
                {Array.from(Array(5)).map((_, idx) => {
                  return (
                    <Fragment key={idx}>
                      {idx < product.rating ? (
                        <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                      ) : (
                        <StarIcon className="w-4 h-4 text-yellow-300" />
                      )}
                    </Fragment>
                  );
                })}
              </div>
              <p></p>
              <p className="pt-[20px] text-grey-200 font-medium line-clamp-2">
                Rs:{product.price}
              </p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Prodcuts
