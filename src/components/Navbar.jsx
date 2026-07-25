import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Gallery", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-700">Pavna School</h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-teal-700 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-4 gap-4 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-teal-700 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;