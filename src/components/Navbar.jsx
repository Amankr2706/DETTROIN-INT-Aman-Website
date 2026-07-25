import { useState } from "react";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { label: "Home", dropdown: null },
    {
      label: "About Us",
      dropdown: ["Overview", "School Policies", "Managing Committee"],
    },
    {
      label: "Academics",
      dropdown: ["Faculty", "Assessment & Evaluation"],
    },
    { label: "Beyond Academics", dropdown: null },
    { label: "Infrastructure", dropdown: null },
    {
      label: "Admission",
      dropdown: ["Admission Process", "Fee Structure", "FAQ"],
    },
    { label: "Contact Us", dropdown: null },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <img src={logo} alt="Pavna School logo" className="h-10 sm:h-12 w-auto" />

        <ul className="hidden lg:flex gap-6 font-medium text-gray-700 text-sm">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="hover:text-teal-700 cursor-pointer transition flex items-center gap-1">
                {item.label}
                {item.dropdown && <span className="text-xs">▾</span>}
              </span>

              {item.dropdown && openDropdown === item.label && (
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] border border-gray-100">
                  {item.dropdown.map((sub) => (
                    <li
                      key={sub}
                      className="px-4 py-2 hover:bg-teal-50 hover:text-teal-700 cursor-pointer transition text-sm"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white transition"
            aria-label="Login"
          >
            👤
          </button>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col bg-white shadow-md py-4 gap-1 font-medium text-gray-700 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.label} className="px-4">
              <div
                className="flex justify-between items-center py-2 cursor-pointer hover:text-teal-700"
                onClick={() =>
                  setOpenDropdown(openDropdown === item.label ? null : item.label)
                }
              >
                {item.label}
                {item.dropdown && <span className="text-xs">▾</span>}
              </div>
              {item.dropdown && openDropdown === item.label && (
                <ul className="pl-4 pb-2">
                  {item.dropdown.map((sub) => (
                    <li
                      key={sub}
                      className="py-1.5 text-sm text-gray-600 hover:text-teal-700 cursor-pointer"
                    >
                      {sub}
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