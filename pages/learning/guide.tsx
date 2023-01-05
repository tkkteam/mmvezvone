import React from "react";
import Head from "next/head";
import Link from "next/link";
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
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div className="p-6">
    <Link href="/learning/1" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
    เกร็ดความรู้ THE MAYOR
    </button> 
    </Link>
      <p className="text-orange-700">
      มีข้อความเมื่อไปคุยกับ NPC ไม่สามารถทำธุรกรรมได้ PLEASE CLAIMYOUR PENDING
REWAREDS FROM WILD RESVLT  BEFORE
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img src="https://i.ibb.co/NxP91Sr/work.png" 
        alt="Laptop on Desk" 
        className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
      <div className="p-6">
      <Link href="/learning/2" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
   ฟาร์ม Fish Pond
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ ฟาร์ม Fish Pond (ฟาร์มบ่อปลา)
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    
    <div className="p-6">
    <Link href="/learning/1" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
  Material Box คืออะไร
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ Material Box
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    
    <div className="p-6">
    <Link href="/tutorials/imploss" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
  Impermannent loss คืออะไร
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ Impermannent loss
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    
    <div className="p-6">
    <Link href="/learning/4" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
  JEWELRY คืออะไร
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ JEWELRY
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div className="p-6">
    <Link href="/learning/5" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
  ข้อมูลกล่อง Orange Box
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ กล่อง Orange Box
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/NxP91Sr/work.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    
    <div className="p-6">
    <Link href="/learning/6" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
การ์ดบิงโก
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ การ์ดบิงโก
      </p>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl md:flex">
  
    <img src="https://i.ibb.co/T8NDxW7/Chestnut-Box.png" 
    alt="Laptop on Desk" 
    className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    
    <div className="p-6">
    <Link href="/learning/7" passHref>
    <button 
    type="button" 
    className="border-2 border-blue-500 font-bold text-blue-500 px-3 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
กล่อง Chestnut Box
    </button> 
    </Link>
      <p className="text-orange-700">
      ข้อมูลทั่วไป เกี่ยกับ กล่อง Chestnunt
      </p>
      
      </div>
      </div>


      </div>
      </div>
          </div>
  );
};
export default guide;
