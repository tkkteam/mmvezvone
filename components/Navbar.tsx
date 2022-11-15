import React from "react";
import Image from "next/image";
import Themes from "./Themes";

const Navbar = () => {
  return (
    
  <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
   <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">คำนวณผลผลิตต่อวัน</a></li>
        <li><a href="/Guide">แนะนำการเล่น</a></li>
        <li><a href="/map">แผ่นที่เกม</a></li>
        <li><a href="/develop">ประกาศอัปเดต</a></li>
      </ul>
    </div>
      <div className="flex flex-1 ml-2 space-x-2">
        <div className="aspect-square flex flex-col items-center justify-center w-10 h-10">
          <Image
            src="/icons/mmv_logo.png"
            alt="mmv-logo"
            width={50}
            height={50}
          />
        </div>
        <span className="select-none font-medium  text-center ">MMV Calculator</span> 
      </div>
      <Themes/>
    </nav>
  );
};
export default Navbar;

