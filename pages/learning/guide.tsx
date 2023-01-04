import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">เกร็ดความรู้ทั่วไปเกี่ยวกับเกม MorningMoon Village</h1>
      </div>
      
      
      <div className="grid grid-cols-2 gap-4 justify-evenly">
  <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/1" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">เกร็ดความรู้ THE MAYOR</h2>
      <p className="text-orange-700">
      มีข้อความเมื่อไปคุยกับ NPC ไม่สามารถทำธุรกรรมได้ PLEASE CLAIMYOUR PENDING
REWAREDS FROM WILD RESVLT  BEFORE
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/2" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">ฟาร์ม Fish Pond</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ ฟาร์ม Fish Pond (ฟาร์มบ่อปลา)
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/3" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">Material Box คืออะไร</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ Material Box
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/tutorials/imploss" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">Impermannent loss คืออะไร</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ Impermannent loss
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/4" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">JEWELRY คืออะไร</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ JEWELRY
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/5" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">ข้อมูลกล่อง Orange Box</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ กล่อง Orange Box
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  <Link href="/learning/6" passHref>
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    </Link>
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-700">การ์ดบิงโก</h2>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ การ์ดบิงโก
      </p>
      </div>
     
      </div>
     


      </div>
      </div>
          </div>
  );
};
export default guide;
