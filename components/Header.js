"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">RealTech</a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/aboutus" className="text-white">About Us</Link>
          <Link href="/product" className="text-white">Products</Link>
          <Link href="/page" className="text-white">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black shadow-md py-4 px-6">
          <Link href="/" className="block py-2 text-white">Home</Link>
          <Link href="/aboutus" className="block py-2 text-white">About Us</Link>
          <Link href="/product" className="block py-2 text-white">Products</Link>
          <Link href="/page" className="block py-2 text-white">Contact</Link>
        </nav>
      )}
    </header>
  );
}
