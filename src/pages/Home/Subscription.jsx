import SubscripImage from "../../assets/images/subscribe.png";

const SubscriptionSection = () => {
  return (
    <div className="bg-primary">
      <div className="flex">
        <div className="w-full lg:w-1/2 flex justify-end py-24 items-center text-white">
          <div className="px-4 text-center lg:text-left lg:px-10 xl:px-28 w-full flex items-center justify-center flex-col lg:items-start">
            <h2 className="text-3xl font-serif">Subscribe to our newsletter</h2>
            <p className="text-lg mt-4">
              Subscribe to receive 10% off your next purchase. Plus hear about
              new arrivals and offers
            </p>

            <div className="mt-8 p-1 pl-2 bg-white flex items-center w-full max-w-xl">
              <input
                className="flex-1 py-2 rounded-lg focus:outline-none text-primary"
                placeholder="Your Email"
              />
              <button className="bg-primary px-16 py-3">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden lg:flex">
          <img
            src={SubscripImage}
            alt="Subscribe"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
