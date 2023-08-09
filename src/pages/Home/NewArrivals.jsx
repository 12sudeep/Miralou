import { classNames } from "../../utils/class-names";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilledIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";




const NewArrials = ({ products }) => {

  return (
    <section>
      <div className="py-10 container mx-auto">
        <h2 className="text-6xl text-center">New Arrivals</h2>
        <p className="text-center w-full lg:w-1/2 px-4 lg:px-0 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
          enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
          Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
          ultricies.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm px-4 lg:px-0">
          {products.map((product, idx) => (
            <div key={idx} className={classNames("flex-1 min-w-[274px]")}>
              <img
                src={product.image}
                alt="product"
                className="w-full object-cover object-center h-64"
              />
              <h3 className="mt-5 text-2xl font-semibold">{product.name}</h3>
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
              <p className="text-grey-200 font-medium line-clamp-2">
                {product.price}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <Link to="/products" className="border rounded px-14 py-4">
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrials;
