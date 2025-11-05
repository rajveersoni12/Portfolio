import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-4">
            <div className="mb-4 md:mb-6">
              <Link
                to="/"
                className="text-2xl md:text-3xl font-bold flex items-center"
              >
                <div className="bg-white text-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md mr-2">
                  <span className="font-bold text-sm md:text-base">AT</span>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-xs">
              I'm Anshul - a full-stack developer, freelancer & problem solver.
              Thanks for checking out my site!
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-6 md:mt-8">
              © {currentYear} Anshul Tatware
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">
              General
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">
                Specifics
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    to="/guestbook"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Guest Book
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bucket-list"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Bucket List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/uses"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Uses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attribution"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Attribution
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">
                Extra
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link
                    to="/book-call"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Book a call
                  </Link>
                </li>
                <li>
                  <Link
                    to="/links"
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Links
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-12 space-x-4 md:space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-2 md:p-3 rounded-full text-gray-400 hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-2 md:p-3 rounded-full text-gray-400 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <Github size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-2 md:p-3 rounded-full text-gray-400 hover:text-white transition-all"
            aria-label="Twitter"
          >
            <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
