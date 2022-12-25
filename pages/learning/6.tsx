import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function Page6() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ข้อมูล การ์ดบิงโก</h1>
      </div>
      <div className="flex-1 text-center">
      <Link href="https://www.facebook.com/MorningMoonVillageOfficial">
            <a target="_blank">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  อ่านข้อมูลเพิ่มเติมได้ที่นี้
      </button>
            </a>
              </Link>
              </div>
      </div>
     
      <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/sJRkjqQ/01.jpg" 
      alt="binggo"
        width={1200}
        height={800}
        priority
        />
        <Image 
      src="https://i.ibb.co/rZxVDnk/02.jpg" 
      alt="binggo"
        width={1200}
        height={800}
        priority
        />
        <Image 
      src="https://i.ibb.co/rZFJLbP/03.jpg" 
      alt="binggo"
        width={1200}
        height={800}
        priority
        />
            </div>
            </div>
          

      
      </div>
  );
};
export default Page6;
