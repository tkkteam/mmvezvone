import React from "react";
import Image from "next/image";
import Themes from "./Themes";
import Link from "next/link";

const Navbar = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
   <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
         <Image
            src="/icons/MENU.png"
            alt="mmv-logo"
            width={50}
            height={50}
          />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/"passHref>หน้าหลัก</Link></li>
        <li><Link href="/calculator"passHref>คำนวณผลผลิตต่อวัน</Link></li>
        <li><Link href="/tutorials/map"passHref>แผนที่เกม</Link></li>
        <li><Link href="/tutorials/develop"passHref>ประกาศอัปเดต</Link></li>
        <li><Link href="/xrb/Capsule"passHref>Capsule Chart</Link></li>
      </ul>
    </div>
      <div className="flex flex-1 ml-2 space-x-2">
        <div className="aspect-square flex flex-col items-center justify-center">
        <Link href="https://whitepaper.morningmoonvillage.com/">
            <a target="_blank"> 
          <Image
          className="hover:opacity-50"
            src="/icons/btn_whitepaper_desktop.png"
            alt="mmv-logo"
            width={50}
            height={50}
          />
           </a>
        </Link>
        </div>
        
        <div className="aspect-square flex flex-col items-center justify-center">
        <Link href="https://mmv.megaland.io/">
            <a target="_blank"> 
          <Image
          className="hover:opacity-50"
            src="/icons/btn_marketplace.png"
            alt="mmv-logo"
            width={50}
            height={50}
          />    
        </a>
        </Link>
        </div>
        
        <div className="aspect-square flex flex-col items-center justify-center ">
        <Link href="https://morningmoonvillage.com/leaderboard">
            <a target="_blank"> 
          <Image
          className="hover:opacity-50"
            src="/icons/btn_fishingLeaderbaord.png"
            alt="mmv-logo"
            width={50}
            height={50}
          />
           </a>
        </Link>
        </div>
        </div>
      <Themes/>
    </nav>
  );
};
export default Navbar;

