import { useState } from "react";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { label: "Home", href: "#home", dropdown: null },
    {
      label: "About Us",
      href: "#about",
      dropdown: [
        { label: "Overview", href: "#about" },
        { label: "Our Facilities", href: "#facilities" },
      ],
    },
    {
      label: "Academics",
      href: "#facilities",
      dropdown: [
        { label: "Programs Offered", href: "#facilities" },
        { label: "FAQs", href: "#faq" },
      ],
    },
    { label: "Gallery", href: "#gallery", dropdown: null },
    {
      label: "Infrastructure",
      href:  "#infrastructure",
      dropdown: [
        { label: "Campus & Labs", href: "#infrastructure" },
        { label: "Photo Gallery", href: "#gallery" },
      ],
    },
    {
      label: "Admission",
      href: "#contact",
      dropdown: [
        { label: "Apply Now", href: "#contact" },
        { label: "Admission FAQs", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    { label: "Contact Us", href: "#contact", dropdown: null },
  ];

  const scrollTo = (href) => {
    setIsOpen(false);
    setOpenDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md fixed w-full top-0 left-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <img src={logo} alt="Pavna School logo" className="h-10 sm:h-12 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 font-medium text-gray-700 dark:text-gray-200 text-sm">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => scrollTo(item.href)}
                className="hover:text-teal-700 dark:hover:text-teal-400 cursor-pointer transition flex items-center gap-1 whitespace-nowrap"
              >
                {item.label}
                {item.dropdown && <span className="text-xs">▾</span>}
              </button>

              {item.dropdown && openDropdown === item.label && (
                <ul className="absolute top-full left-0 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 min-w-[200px] border border-gray-100 dark:border-slate-700">
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <button
                        onClick={() => scrollTo(sub.href)}
                        className="w-full text-left px-4 py-2 hover:bg-teal-50 dark:hover:bg-slate-700 hover:text-teal-700 dark:hover:text-teal-400 cursor-pointer transition text-sm"
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white transition"
            aria-label="Login"
          >
            👤
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col bg-white dark:bg-slate-900 shadow-md py-4 gap-1 font-medium text-gray-700 dark:text-gray-200 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.label} className="px-4">
              <div
                className="flex justify-between items-center py-2 cursor-pointer hover:text-teal-700 dark:hover:text-teal-400"
                onClick={() => {
                  if (item.dropdown) {
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  } else {
                    scrollTo(item.href);
                  }
                }}
              >
                {item.label}
                {item.dropdown && <span className="text-xs">▾</span>}
              </div>
              {item.dropdown && openDropdown === item.label && (
                <ul className="pl-4 pb-2">
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <button
                        onClick={() => scrollTo(sub.href)}
                        className="w-full text-left py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-400 cursor-pointer"
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="px-4 pt-2 flex gap-3">
            <ThemeToggle />
            <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-full text-sm transition">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;