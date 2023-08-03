import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "Shop",
      to: "/shop"
    },
    {
      label: "Product",
      to: "/product"
    },
    {
      label: "Blog",
      to: "/blog"
    },
    {
      label: "About",
      to: "/about"
    },

  ]

  return (
    <header className="container mx-auto">
      <nav className="flex justify-between py-7">
        <div className="font-serif">Miralou </div>
        <div className="flex gap-4">
          {
            links.map((link, index) => (
              <Link to={link.to} key={index} >{link.label}</Link>
            ))
          }
        </div>
        <div className='flex gap-8'>
          <MagnifyingGlassIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
