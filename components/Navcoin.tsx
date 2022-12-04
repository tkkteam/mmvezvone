import React from "react";
import Themes from "./Themes";
import Link from "next/link";
import Image from "next/image";

const Navcoin = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
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
              <div className="flex flex-1 ml-2 space-x-2">
        <span className="select-none font-medium  text-center ">ราคาเหรียญ MMV,DK,BITKUB</span>
      </div>
      <Themes/>
        </nav>
  );
};
export default Navcoin;

