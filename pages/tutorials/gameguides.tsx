import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav";

 function gameguides() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำเกม MorningMoon Village</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-red-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-red-500 font-medium text-center">แนะนำเกม MorningMoon Village</h1>
      </div>
      
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg text-green-500  font-medium text-center">ภาพรวมของเกม</h1>
          <p>Morning Moon Village เป็นเกมปลูกผักทำฟาร์มและสำรวจทรัพยากร 
            ที่นำระบบ Yield farming แบบ Defi มาสร้างเป็นเกม ผู้เล่นจะได้เรียนรู้วิธีการเป็น Yield farmer และสร้างผลตอบแทนเป็นโทเคนดิจิทัล ไปพร้อมๆกับความสนุกจากการเล่นเกมสไตล์ทำฟาร์ม ในรูปแบบภาพ 3 มิติสุดน่ารัก และยังมีจุดเด่นในเรื่อง NFT ที่จะช่วยยกระดับการแข่งขันให้สนุกยิ่งขึ้น</p>
      </div>
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg text-green-500 font-medium text-center">จุดเด่นของเกม</h1>
          <p>ในโลกของ Morning Moon Village ผู้เล่นสามารถเล่นและผจญภัยอย่างเต็มที่ โดยสิ่งแรกที่ต้องทำคือการสร้างตัวละคร ทุกกิจกรรมหรือธุรกรรมในเกมจะดำเนินการผ่านตัวละครของผู้เล่นนั่นเอง
ผู้เล่นจะสวมบทบาทเป็นตัวละครที่ผู้เล่นสร้าง เพื่อทำกิจกรรมในเกม อาทิ การเดิน สร้างฟาร์ม หว่านเมล็ดพืช เก็บทรัพยากร หรือพูดคุยกับตัวละคร NPC ในเกม</p>
      </div>
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">SPEC ขั้นต่ำ</h1>
          <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/K0qk0qM/spec.png"
    objectFit="cover"
    alt="Picture of the author"
                />
      </div>
      </div>
      </div>
      
  );
};
export default gameguides;
