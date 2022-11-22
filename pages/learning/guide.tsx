import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";

 function guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>เกร็ดความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">เกร็ดความรู้ทั่วไปเกี่ยวกับเกม MorningMoon Village</h1>
      </div>
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden">
      <div className="flex flex-wrap mt-3 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        <div className="col-span-2 sm:col-span-2 xl:col-span-2">
        <Image 
            width={350}
            height={350}
            src="/icons/mmv_logo.png"
            objectFit="cover"
            alt="mmv_logo"
            className="h-24 w-24 rounded  mx-auto hover:opacity-50"
          />
        </div>
        <div className="col-span-2 sm:col-span-4 xl:col-span-4">
          <h3 className="font-semibold ">เกร็ดความรู้ THE MAYOR </h3>
          <p>
          ไม่สามารถทำธุรกรรม แลกเปลี่ยนสินค้าต่างๆกับ NPC ขึ้น Claim Your Pending Rewards From Wild Resvlt Befdre Interacying With Npc ทำอย่างไร ?
          </p>
          <div className="px-2 pt-6">
        <span className="inline-block rounded-full">
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <Link href="/learning/1"passHref>
    <span className="relative  group-hover:text-white">Learn More</span>
    </Link>
  </button></span>
      </div>
        </div>
        </div>
        </div>
      </div>











      </div>
      </div>
        
          
          
         
      
  );
};
export default guide;
