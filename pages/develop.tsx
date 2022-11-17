import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

 function develop() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ประกาศอัปเดต- MorningMoon Village</title>
      </Head> 

      <Navbar />
      <div className="w-full p-10">
    <div className= "p-2 text-3xl  flex items-center justify-center">
        <p>ประกาศอัปเดตแผนพัฒนาเกม Morning Moon Village</p>
        </div>
        <div className= "text-1xl overline flex items-center justify-center">
        <p>ในอนาคต (Roadmap).</p>
        </div>
        <div className="p-2 pl-5 pr-5  text-gray-100 text-lg rounded-lg focus:border-4  text-center">
        <Link href="https://www.facebook.com/MorningMoonVillageOfficial" passHref>
      <a className= "flex items-center justify-center" target="_blank">
        <Image 
              width={1200}
              height={650}
              src="https://i.ibb.co/jwZdvrb/2023.jpg"
              objectFit="cover"
              alt="Picture of the author"
              className="object-cover w-full"
                />
                </a>
                </Link>
        </div>

        <p>📌 Q4 2022 (ปัจจุบัน - ธันวาคม)</p>
        <p>- Fishing Book : หนังสือนักตกปลาที่จะบันทึกข้อมูลการตกปลาของผู้เล่น</p>
        <p>- Fishing Leaderboard : กระดานจันอันดับนักตกปลาโดยแบ่งเป็นกระดานของทั้ง 4 แหล่งน้ำ 
            ซึ่งจะเป็นกระดานจัดอันดับที่จะถูกนำมาใช้ให้รางวัลเงินสะสมประจำฤดูกาลที่ 2 แทนกระดานจัดอันดับ Fish Pond เดิม 
            (รายละเอียดจะประกาศอีกครั้ง)</p>
        <p>- Fishing Jewelry : เครื่องประดับพร้อมความสามารถใหม่ ที่จะนำมาใช้กับ Socket ของเบ็ดตกปลา</p>
        <p>- Bingo mini-game : มินิเกม Bingo สไตล์ชาวสวน (เป็น Lucky pool mini-game ที่เลื่อนมาจาก Roadmap เดิมของ Q3 2022)</p>
        <p>- Graphic Improvement : ปรับปรุงภาพกราฟิกของเกม</p>
        <p>ไอเทมที่ใช้ในการตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        <p>📌 Q1 2023 (มกราคม - มีนาคม)</p>
        <p>- More Character Customization : ระบบปรับแต่งตัวละครเพิ่มเติม</p>
        <p>- Pet System : ระบบสัตว์เลี้ยง</p>
        <p>- Unlock Wild Zone #5 : ปลดล็อคพื้นที่ Wild Zone เพิ่มเติม</p>
        <p>- Town Square (Alpha) : จัตุรัสกลางเมืองเพื่อส่งเสริมระบบ Social (เวอร์ชันทดสอบ Alpha)</p>
        <p>ไอเทมที่ใช้ในการตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        <p>📌 Q2 2023 (เมษายน - มิถุนายน)</p>
        <p>- Home Customization : ระบบปรับแต่งบ้านของชาวหมู่บ้าน</p>
        <p>- Mobile Support (Alpha) : การพัฒนาเพื่อให้เกมรองรับการเล่นบนอุปกรณ์มือถือ (เวอร์ชันทดสอบ Alpha)</p>

        </div>

    </div>

  );
  
};
export default develop;
