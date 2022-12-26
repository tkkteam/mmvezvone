import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import YoutubeEmbed from "../../components/YoutubeEmbed";

 function Page6() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">โปรแกรมคำนวณดาเมจ</h1>
      </div>
      <div className="flex-1 text-center">
      <Link href="https://pondkubs-project-0j2p.glideapp.io/dl/51429a?full">
            <a target="_blank">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  อ่านข้อมูลเพิ่มเติมได้ที่นี้
      </button>
            </a>
              </Link>
              </div>
              <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <p>1.โหลไฟล์สำหรับใช้คำนวณ
            <Link href="https://docs.google.com/spreadsheets/d/1pl_hW7fdhR2s2uWgiHu8dU7aP5Uv93au/edit?usp=share_link&ouid=111017874516244457844&rtpof=true&sd=true">
    <a target="_blank">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    โหลดไฟล์ที่นี้</button>
    </a>
    </Link>
    </p>
          <p>2.คลิกเปิดผ่านเปิด EXcel ในคอมพิวเตอร์</p>
          <p>3.ปรับแก้และใส่อาวุธและเจลลี่ที่ต้องการตามใจชอบ</p>
          <p className="text-red-600 text-lg">ศึกษาวิธีใช้งานเบื้องต้นได้จากคลิปนี้  #นาทีที่ 27 เป็นต้นไป</p>

      </div>




      <div className="p-2 pl-5 pr-5 bg-red-400 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300 text-center">
        <YoutubeEmbed embedId="qM1eCRdSocU" />
        </div> 
      </div>
      
           

      
      </div>
  );
};
export default Page6;
