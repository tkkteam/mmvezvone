import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function Page5() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ข้อมูลกล่อง Orange Box</h1>
      <p>กล่อง Orang Box สามารถหาได้จากการ Craft ที่ NPC : MATHILDA</p>
      <p>โดยสามารถ Craft ได้ 2 วิธี ดังนี้</p>
      <p>ใช้ Fishfood จำนวน 1,000 ต่อ Orange Box 1 กล่อง</p>
      <p>ใช้ Fishfood จำนวน 600, Living Branch จำนวน 50 ชิ้น และ Tainted Leaf จำนวน 10 ชิ้น</p>
      <p>📦 ข้อมูลการดรอป</p>
      <p></p>
      </div>
      </div>
      <div className="flex-1 text-center">
      <div className="hover:opacity-50">
       <Link href="/learning/guide" passHref>
          <Image
                src="/icons/backmenu.png"
                alt="backmemu"
                width={100}
                height={100}
              />
              </Link>
              
              </div>
              </div>
      <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/gDsqQ6j/Orange-Box.jpg" 
      alt="TOPJEWEL"
        width={1000}
        height={1000}
        priority
        />
            </div>
            </div>
          

      
      </div>
  );
};
export default Page5;
