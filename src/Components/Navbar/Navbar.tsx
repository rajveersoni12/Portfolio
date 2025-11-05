import { useState, useEffect } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "#",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "More",
      link: "#",
      dropdown: [
        {
          name: "Bucket List",
          link: "/bucket-list",
        },
      ],
    },
    {
      name: "Buy Me a Coffee",
      link: "https://buymeacoffee.com/anshultatwc",
    },
  ];

  const navbarBackground = scrolled
    ? "bg-black/80 backdrop-blur-sm"
    : "bg-transparent";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div
        className={`w-full hidden md:flex z-[5000] items-center justify-center px-6 fixed top-0 left-0 right-0 transition-colors duration-300 ${navbarBackground}`}
      >
        <FloatingNav
          navItems={navItems}
          className={`${
            scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
          }`}
        />
      </div>

      <div
        className={`w-full flex md:hidden z-[5000] items-center justify-between px-4 py-3 fixed top-0 left-0 right-0 transition-colors duration-300 ${navbarBackground}`}
      >
        <div className="flex items-center">
          <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-md">
            <span className="font-bold">AT</span>
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[4999] pt-16 px-4 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white text-xl py-4 hover:text-gray-300 transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
                {...(item.link.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.name}
              </a>
            ))}
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium">
              Book a Call
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
