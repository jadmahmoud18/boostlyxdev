import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Listbox } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const languages = ["English", "Español", "Français"];
  const themes = ["Light", "Dark"];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Column 1 - Product */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-6">PRODUCT</h3>
            <ul className="space-y-4">
              {["Services", "Pricing", "Integrations"].map((item) => (
                <motion.li key={item} whileHover={{ x: 3 }}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Resources */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-6">
              RESOURCES
            </h3>
            <ul className="space-y-4">
              {["Blog", "Guides", "Help Center"].map((item) => (
                <motion.li key={item} whileHover={{ x: 3 }}>
                  <Link
                    to={`/${
                      item === "Guides"
                        ? "docs/guides"
                        : item.toLowerCase().replace(" ", "-")
                    }`}
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-6">COMPANY</h3>
            <ul className="space-y-4">
              {["About", "Contact", "Legal"].map((item) => (
                <motion.li key={item} whileHover={{ x: 3 }}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Settings */}
          <div className="space-y-8">
            {/* Language Selector */}
            <div>
              <h3 className="text-lg font-bold text-indigo-600 mb-4">
                LANGUAGE
              </h3>
              <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <div className="relative">
                  <Listbox.Button className="w-full text-left py-2 px-4 border-b-2 border-indigo-100 focus:outline-none focus:border-indigo-500">
                    <span className="block text-base font-medium text-gray-800">
                      {selectedLanguage}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-indigo-400" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md focus:outline-none z-10">
                    {languages.map((language) => (
                      <Listbox.Option
                        key={language}
                        value={language}
                        className={({ active }) =>
                          `cursor-pointer select-none py-2 px-4 ${
                            active
                              ? "bg-indigo-50 text-indigo-600"
                              : "text-gray-800"
                          }`
                        }
                      >
                        <span className="block text-base font-medium">
                          {language}
                        </span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {/* Theme Selector */}
            <div>
              <h3 className="text-lg font-bold text-indigo-600 mb-4">THEME</h3>
              <Listbox value={selectedTheme} onChange={setSelectedTheme}>
                <div className="relative">
                  <Listbox.Button className="w-full text-left py-2 px-4 border-b-2 border-indigo-100 focus:outline-none focus:border-indigo-500">
                    <span className="block text-base font-medium text-gray-800">
                      {selectedTheme}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-indigo-400" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md focus:outline-none z-10">
                    {themes.map((theme) => (
                      <Listbox.Option
                        key={theme}
                        value={theme}
                        className={({ active }) =>
                          `cursor-pointer select-none py-2 px-4 ${
                            active
                              ? "bg-indigo-50 text-indigo-600"
                              : "text-gray-800"
                          }`
                        }
                      >
                        <span className="block text-base font-medium">
                          {theme}
                        </span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-bold text-indigo-600 mb-4">
                FOLLOW US
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaXTwitter, href: "https://x.com/BoostLyx" },
                  { icon: FaInstagram, href: "https://instagram.com/boostlyx" },
                  { icon: FaLinkedinIn, href: "https://linkedin.com/boostlyx" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="mb-4 md:mb-0">
            <img
              src="/logos/banner-color-purple-white.svg"
              alt="BoostLyx Logo"
              className="h-8"
            />
          </Link>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} BoostLyx. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
