import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function Page3() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">Material Box คืออะไร</h1>
      <p>📦 Material Box คืออะไร มีประโยชน์อย่างไร ทำไมหลายคนตามหา ?</p>
.     <p>🔸 Material Box เป็นกล่องที่บรรจุ วัตถุดิบ (Materrial) ในการใช้ ตีบวก และเสริมสถานะอุปกรณ์ เช่น ขวาน ค้อน มีด กระบอง เคียว เบ็ดตกปลา หรือ Jewels เป็นต้น โดยชาวหมู่บ้านสามารถหาได้จากกล่องสมบัติตามแผนที่ (Map) ภายใน Mornig Moon Villag </p>
      <p>🔸 กล่องสมบัติที่บรรจุใช้ Material Box จำเป็นต้องใช้ Silver Key ในการเปิด</p>
      <p>🔸 ข้อมูลการดรอปของต่อไปนี้ อาจมีการเปลี่ยนแปลงได้ในเกมเวอร์ชันเต็ม</p>
      <p>🔸  อ้างอิงข้อมมูล : Whitepaper - Morning Moon Viallage</p>
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
      src="https://i.ibb.co/MDqhj2v/mbox2.jpg" 
      alt="mbox"
        width={1000}
        height={1000}
        priority
        />
            </div>
            </div>
            <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/vzjyvvk/mbox1.jpg" 
      alt="mbox"
        width={1000}
        height={1000}
        priority
        />
            </div>
            </div>
     
      

      
      </div>
  );
};
export default Page3;
