import React from "react";
import Themes from "./Themes";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    
  <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
   <div className="navbar bg-neutral text-neutral-content">
   <div className="hover:opacity-50">
   <Link href="/" passHref>
      <Image
            src="/icons/home.png"
            alt="home"
            width={50}
            height={50}
          />
          </Link>
          </div>
          <div className="hover:opacity-50">
          <Link href="/Guide" passHref>
      <Image
            src="/icons/MENU.png"
            alt="MENU"
            width={50}
            height={50}
          />
          </Link>
          </div>
          <div className="px-6 pt-4"></div>
  <a className="text-xl">ความรู้ทั่วไปเกี่ยวกับเกม</a>
  
</div>
<Themes/>
    </nav>
  );
};
export default Nav;

