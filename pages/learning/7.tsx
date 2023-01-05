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
          <h1 className="text-lg font-medium text-center">ข้อมูลกล่อง Chestnut Box</h1>
          <p>🔸 กล่อง Chestnunt หาได้จากการนำ Chestnunt 🌰 ไปแลกที่ NPC MR.WANG จำนวน 100 Chestnunt / กล่อง</p>
          <p>🔸 🌰 Chestnunt เป็นรางวัลที่ได้จาการชนะ BingoParty เท่านั้น</p>
          <p className="text-red-500">🔸 ข้อมูลการดรอปของต่อไปนี้ อาจมีการเปลี่ยนแปลงได้ในเกมเวอร์ชันเต็ม</p>
          <p>
          <Link href="https://whitepaper-th.morningmoonvillage.com/nfts/gift-box/chestnut">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                อ่านข้อมูลเพิ่มเติมได้ที่นี้
                                </button> 
                                    </a>
                                </Link>
        </p>
      </div>
      </div>
     
      <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/BcjZ1Z0/Chestnunt.jpg" 
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
