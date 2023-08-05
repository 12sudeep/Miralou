import { format } from "date-fns";
import { Link } from "react-router-dom";
import DefaultProduct from "../../assets/images/default-product.png";
import { classNames } from "../../utils/class-names";

const NewsCard = ({ news }) => {
  return (
    <Link className={classNames("flex-1 min-w-[274px]")} to={news.slug}>
      <img
        src={news.featured_image}
        alt="news"
        className="w-full object-cover object-center h-80"
      />
      <span className="mt-2 block">
        {format(new Date(news.published_date), "do MMM, yyyy")}
      </span>

      <h3 className="mt-2 text-2xl font-semibold">{news.title}</h3>
      <p className="text-grey-200 line-clamp-2">{news.exerpt}</p>
    </Link>
  );
};

const LatestNews = () => {
  const products = [
    {
      title: "Latest news 1",
      slug: "latest-news-1",
      exerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      published_date: "2021-09-24T00:00:00.000Z",
      featured_image: DefaultProduct,
    },
    {
      title: "Latest news 2",
      slug: "latest-news-2",
      exerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      published_date: "2021-09-24T00:00:00.000Z",
      featured_image: DefaultProduct,
    },
    {
      title: "Latest news 3",
      slug: "latest-news-3",
      exerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      published_date: "2021-09-24T00:00:00.000Z",
      featured_image: DefaultProduct,
    },
  ];

  return (
    <section>
      <div className="py-10 container mx-auto">
        <h2 className="text-6xl text-center">Latest News</h2>
        <p className="text-center w-full px-4 lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
          enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
          Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
          ultricies.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm px-4 lg:px-0">
          {products.map((news, idx) => (
            <NewsCard news={news} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
