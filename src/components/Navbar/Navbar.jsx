import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Shop",
      to: "/shop",
    },
    {
      label: "Product",
      to: "/products",
    },
    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <header className="container mx-auto px-4 lg:px-0">
      <nav className="flex justify-between py-7">
        <Link className="font-serif" to="/">
          Miralou{" "}
        </Link>
        <div className="gap-4 hidden lg:flex">
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="gap-8 hidden lg:flex">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
