import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

 function Guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำการเล่น- MorningMoon Village</title>
      </Head> 
    
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> 
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    
    <Link href="/weapon">
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/9rkr766/joe1.png"
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">การตีบวกไอเทม The Mayor</div>
        <p className="text-base">รวมข้อมูลการตีบวกไอเทมที่ซื้อมาจากร้าน The Mayor มีขวาน ค้อน คฑา ตั้งแต่ Lv.1-7 ใช้ของกี่ชิ้นมีอะไรบ้าง</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ตีบวกอาวุธ</span>
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Link href="/Bait">
      <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/RzGdDxT/joe-bait.png"
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">การตีบวกเบ็ดตกปลา</div>
        <p className=" text-base">รวมข้อมูลการตีบวกเบ็ดตกปลา ระดับ Rare Epic Legendart Relic ตั้งแต่ Lv.1-7 ใช้ของกี่ชิ้นมีอะไรบ้าง</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ตีบวกเบ็ดตกปลา</span>
      </div>
      </div>
      </div>
      </div>
  
  );
};
export default Guide;
