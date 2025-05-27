"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-purple-100  py-6 px-6 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-800">
          📝 Note App
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 items-center font-bold text-lg">
          <Link
            href="/"
            className="text-purple-700 hover:text-purple-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/note"
            className="text-purple-700 hover:text-purple-900   transition-colors duration-200"
          >
            Add Note
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
