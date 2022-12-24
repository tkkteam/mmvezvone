import React from "react";
import Navback from "../../components/Navback";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

 function commu() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>รวมกิจกรรม Cummu</title>
      </Head> 
      <Navback />
       <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> 
       <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img 
        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
        alt="Testimonial avatar" 
        src="https://i.ibb.co/7nNCVY8/CM.png"/>
    </div>

    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">CM Dungeon</h2>

    <p className="mt-2 text-gray-600 dark:text-gray-200">กิจกรรมของทาง Cat Meaw Dungeon โดยให้ผู้เล่นเข้าเล่นเกม Morning Moon Village โดยการรับภารกิจหรือเควสผ่านทางเว็บไซต์ cmhexa.com ตอนนี้ท่านสามารถเข้าร่วมกิจกรรมได้แล้วโดยระบบเปิดให้ทดสอบเวอร์ชั่น Beta </p>

    <div className="flex justify-end mt-4">
    <Link href="/cmtoken/cmdungeon">
          
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-yellow-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">เข้าร่วมกิจกรรม</span>
          </button>
        
      </Link>
    </div>
</div>
<div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img 
        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
        alt="Testimonial avatar" 
        src="https://i.ibb.co/DRhjX3M/chainz888.jpg"/>
    </div>

    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">DARUMA888</h2>

    <p className="mt-2 text-gray-600 dark:text-gray-200">DARUMA888 จัดกิจกรรมมากมายสำหรับผู้ที่ถือครอง NFT DARUNA ระดับไหนก็ได้ สามารถเข้าร่วมเล่นเกมเพื่อรับของรางวัลจากทาง DARUMA หรือ CHAINZ888</p>

    <div className="flex justify-end mt-4">
    <Link href="/Daruma/darumaquest">
          
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">เข้าร่วมกิจกรรม</span>
          </button>
        
      </Link> 
    </div>
</div>
<div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img 
        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
        alt="Testimonial avatar" 
        src="https://i.ibb.co/RbxLv4R/TATUMCOM.png"/>
    </div>

    <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">BANANA สลากพลัส</h2>

    <p className="mt-2 text-gray-600 dark:text-gray-200">BANANA สลากพลัส เป็บนกิจกรรมเสี่ยงโชค เสี่ยงดวง โดยให้ผู้เล่นเกม Morning Moon Village นำผลผลิตมาแลกโดยผ่านระบบ P2P และต้องใช้กระเป๋า MetaMask ในการร่วมสนุก</p>

    <div className="flex justify-end mt-4">
    <Link href="https://mmvplus.vercel.app/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">เข้าร่วมกิจกรรม</span>
            </button>
            </a>
        </Link>
    </div>
</div>
    






      </div>
      </div>
  
  );
};
export default commu;
