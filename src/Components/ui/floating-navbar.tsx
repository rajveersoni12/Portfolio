"use client";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import DrawerBottom from "@/Pages/LandingPage/HeroSection/Drawerbottom/DrawerBottom";
import { JSX, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ChevronDown } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    dropdown?: {
      name: string;
      link: string;
    }[];
  }[];
  className?: string;
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef as React.RefObject<HTMLDivElement>, () =>
    setActiveDropdown(null)
  );

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={dropdownRef}
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 items-center justify-center",
          className
        )}
      >
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold flex items-center ml-4 md:ml-6"
        >
          <div className="bg-white text-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md mr-2">
            <span className="font-bold text-sm md:text-base">AT</span>
          </div>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4 px-4 relative">
          {navItems.map((navItem, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              {navItem.dropdown ? (
                <button
                  onClick={() => toggleDropdown(idx)}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-1 md:px-2"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-xs md:text-sm flex items-center gap-1">
                    {navItem.icon && (
                      <span className="inline-block">{navItem.icon}</span>
                    )}
                    {navItem.name}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200",
                      activeDropdown === idx ? "rotate-180" : ""
                    )}
                  />
                </button>
              ) : (
                <a
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-1 md:px-2"
                  )}
                  {...(navItem.link.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-xs md:text-sm">
                    {navItem.name}
                  </span>
                </a>
              )}

              {/* Dropdown Menu */}
              {navItem.dropdown && (
                <AnimatePresence>
                  {activeDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 bg-black/90 backdrop-blur-md border border-white/[0.1] rounded-xl shadow-[0px_8px_16px_rgba(0,0,0,0.4)] min-w-[140px] z-[5001]"
                    >
                      {navItem.dropdown.map((dropdownItem, dropdownIdx) => (
                        <a
                          key={`dropdown-${idx}-${dropdownIdx}`}
                          href={dropdownItem.link}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/[0.05] transition-all duration-200 first:rounded-t-lg last:rounded-b-lg relative group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="relative z-10">
                            {dropdownItem.name}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
        <div className="border text-xs md:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-3 md:px-4 py-1 md:py-2 rounded-full mx-2 md:mx-4">
          <DrawerBottom trigger={<span>Book a Call</span>} />
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
