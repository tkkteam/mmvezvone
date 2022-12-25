import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function Page4() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">JEWELRY คืออะไร</h1>
      <p>มาทำความรู้จักกับ Jewel หรือ เพชร เป็นอัญมณีรูปแบบ NFT ใช้สำหรับ CRAFT อาวุธ</p>
      </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/5LBzX9w/jewel.jpg" 
      alt="TOPJEWEL"
        width={1000}
        height={1000}
        priority
        />
            </div>
            </div>
            <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/nb1pxYn/TOPJEWEL.png" 
      alt="TOPJEWEL"
        width={1000}
        height={1500}
        priority
        />
            </div>
            </div>
      

      
      </div>
  );
};
export default Page4;
