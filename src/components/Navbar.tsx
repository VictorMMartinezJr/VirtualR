import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700/80 backdrop-blur-lg">
      <nav className="py-3">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>

            {/* Navigation Items */}
            <ul className="hidden lg:flex ml-14 space-x-12 cursor-pointer">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button className="cursor-pointer" onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-linear-to-r from-orange-500 to-orange-800"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
