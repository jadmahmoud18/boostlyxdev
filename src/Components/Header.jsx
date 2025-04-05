import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1023.5px)");
  const headerRef = useRef(null);

  useScrollPosition(
    ({ currPos }) => {
      const shouldScroll = currPos.y < -10;
      if (shouldScroll !== isScrolled) {
        setScrolled(shouldScroll);
      }
    },
    [isScrolled],
    headerRef,
    false,
    100
  );

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "https://blog.boostlyx.com", external: true },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: 0, padding: "0.5rem 0" }}
      animate={{ y: 0, padding: isScrolled ? "0rem 0" : "0.5rem 0" }}
      transition={{ type: "spring", damping: 20 }}
      className={`sticky top-0 left-0 right-0 z-50 bg-white shadow-sm `}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center"
              aria-label="BoostLyx Home"
            >
              <img
                src="/logos/banner-color-purple-white.svg"
                alt="BoostLyx Logo"
                className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </motion.div>

          {!isMobile && (
            <nav className="flex items-center space-x-6 xl:space-x-8">
              <ul className="flex space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors duration-200 relative group"
                          aria-label={`${item.name} (opens in new tab)`}
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-600 w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors duration-200 relative group"
                          aria-label={item.name}
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-600 w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.dash.boostlyx.com/accounts/sign-in"
                  className="ml-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sign In (opens in new tab)"
                >
                  Sign In
                </a>
              </motion.div>
            </nav>
          )}

          {isMobile && (
            <button
              onClick={toggleMenu}
              className="p-2 cursor-pointer rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-8 h-8" />
              ) : (
                <FiMenu className="w-8 h-8" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 pt-20 bg-white"
            >
              <div className="relative h-[calc(100vh-5rem)] flex flex-col justify-between">
                <div className="container mx-auto px-4 sm:px-6 py-8 overflow-y-auto">
                  <ul className="flex flex-col items-center space-y-6">
                    {navItems.map((item) => (
                      <li key={item.name} className="w-full text-center">
                        {item.external ? (
                          <a
                            href={item.href}
                            className="text-2xl font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200 block py-3"
                            onClick={toggleMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${item.name} (opens in new tab)`}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="text-2xl font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200 block py-3"
                            onClick={toggleMenu}
                            aria-label={item.name}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="container mx-auto px-4 sm:px-6 pb-8">
                  <a
                    href="https://www.dash.boostlyx.com/accounts/sign-in"
                    className="block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sign In (opens in new tab)"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
