import React from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

 function Guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำการเล่น- MorningMoon Village</title>
      </Head> 
      <Nav />
       <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> 
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    
    <Link href="/tutorials/gameguides" passHref>
    <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/48jsg9K/gameguide.png"
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">แนะนำเกม</div>
        <p className="text-base">แนะนำการเล่น เรื่องราวของเกม จุดเด่นของเกม</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#แนะนำเกม</span>
      </div>
    </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    
    <Link href="/weapon/guide" passHref>
    <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/hKvvMjh/Themayor.png"
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">การตีบวกไอเทมต่างๆในเกม</div>
        <p className="text-base">รวมข้อมูลการตีบวกไอเทมที่ซื้อมาจากร้าน The Mayor มีขวาน ค้อน คฑา เบ็ดตกปลา ตั้งแต่ Lv.1-7 ใช้ของกี่ชิ้นมีอะไรบ้าง</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ตีบวกอาวุธ</span>
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Link href="/Bait/guide" passHref>
      <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/HDXbbng/bait1.png"
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">แนะนำเบ็ดตกปลา</div>
        <p className="text-base">รวมข้อมูลเบ็ดตกปลา</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#แนะนำเบ็ดตกปลา</span>
      </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Link href="/learning/guide" passHref>
      <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/42MmNXF/learning.png"
    objectFit="cover"
    alt="learning"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">ความรู้ทั่วไป</div>
        <p className="text-base">เกร็ดความรู้ ทั่วไปเกี่ยวกับ MorningMoon Village การแก้ปัญหาต่างๆภายในเกม วิธีใช้งานไอเทม และอื่นๆ</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ความรู้ทั่วไป</span>
      </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Link href="/GiftBox/allgiftbox" passHref>
      <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/TD39rGv/box.png"
    objectFit="cover"
    alt="learning"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">กล่องของขวัญ</div>
        <p className="text-base">กล่องของขวัญ คือกล่องที่จะมอบรางวัลเป็นสินทรัพย์ในเกมให้ผู้เปิดกล่องแบบสุ่ม กล่องของขวัญมีหลายประเภท แต่ละประเภทจะให้รางวัลที่แตกต่างกัน</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#กล่องของขวัญ</span>
      </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    <Link href="/learning/damage" passHref>
      <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/b5Z5fVm/damage.png"
    objectFit="cover"
    alt="learning"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">โปรแกรมคำนวณดาเมจ</div>
        <p className="text-base">โปรแกรมคำนวณดาเมจเป็นเวอร์ชั่นที่ใช้ในคอม้ท่านั้น ผู้ใช้งานต้องดาวน์โหลดไฟล์เพื่อติดตั้งลงคอมของท่านเองและต่อไปกำลังพัฒนาให้คำนวนการกินเลือดและพลังป้องกัน </p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PONDKUB APP</span>
      </div>
      </div>






















      </div>
      </div>
      
  
  );
};
export default Guide;
