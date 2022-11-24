import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function Page2() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ฟาร์ม Fish Pond (ฟาร์มบ่อปลา)</h1>
          <p>ฟาร์ม Fish Pond (ฟาร์มบ่อปลา)</p>
          <p>🔸 Fish Pond เป็นฟาร์มประเภท Seed</p>
          <p>🔸 ใช้ Fish Food ในการให้อาหารและให้ผลผลิตเป็น Gill</p>
          <p>🔸 สามารถนำ Gill ไปแลกเป็น Lumi ได้ในหน้า Shop</p>
          <p>🔸 การให้ Fish Food ในบ่อเลี้ยงปลาแต่ละครั้งจะมีเวลาให้เก็บเกี่ยว Gill ประมาณ 48 ชม. ก่อนที่ผลผลิตจะเน่าเสีย</p>
          <p>🔸 เตือน! เมื่อลงฟาร์ม Fish Pond แล้ว หากจะลงเพิ่มเติม โดยผลผลิตยังไม่ครบ 48 ชม. ผลผลิตเก่าจะถูกเก็บเกี่ยวโดยอัตโนมัติ และ Fish Food ใหม่ที่ใส่ในฟาร์มจะถูก reset เป็น 0 ทันที</p>
          <p>🔸 Liquidity Pool ของ Gill-Lumi จะมีสภาพคล่องเริ่มต้นที่ 80,000,000 Gill และ 8,000,000 Lumi</p>
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
      src="https://i.ibb.co/WgJPR5B/Fish-Pond.jpg" 
      alt="Fish-Pond"
        width={1000}
        height={1000}
        priority
        />
            </div>
            </div>
     
      

      
      </div>
  );
};
export default Page2;
