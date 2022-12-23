import React from "react";
import Link from "next/link";

const Navback = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
    <Link href="/">
      <div className="flex select-none space-x-1 text-gray-700">
        <button className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </button>
      </div>
      </Link> 
    </nav>
    
  );
};
export default Navback;

