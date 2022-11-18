import Navbar from "../../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

 function fishingrod() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ข้อมูลเหยื่อตกปลา</title>
      </Head> 
      <Navbar />
      <div className="w-full p-10">
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>การตกปลาจำเป็นต้องใช้เหยื่อ 1 ชิ้นต่อการตกปลา 1 ครั้ง ถ้าตกไม่สำเร็จ จะไม่มีการเสียเหยื่อตกปลา</p>
        </div>
        <div className= "text-1xl overline flex items-center justify-center">
        <p>ซึ่งเหยื่อตกปลานั้น สามารถหาซื้อได้จาก NPC Sven ตัวใหม่ของหมู่บ้าน</p>
        <p>เหยื่อตกปลาแต่ละชนิดจะมีค่าความสามารถและราคาที่แตกต่างกันไป โดยความสามารถของเหยื่อ จะมีดังนี้</p>
        </div>
        <ul className="list-none text-center p-5">
  <li>📌Price (Gill) = ราคาที่ต้องใช้เหรียญ Gill ซื้อเหยื่อตกปลา</li>
  <li>📌Control = การควบคุมเบ็ด เพิ่มการควบคุมเบ็ดที่จะทำให้ได้ปลาระดับหาง่ายน้อยลง</li>
  <li>📌Durability = ความคงทนของเบ็ด บ่งบอกว่าเบ็ดคันนี้ สามารถตกปลาได้มากที่สุดกี่ครั้งในการออกป่า 1 รอบ</li>
  <li>📌Control Bonus = โบนัสการควบคุมเบ็ด เพิ่มโบนัส Control พิเศษสำหรับแหล่งน้ำแต่ละชนิด</li>
  <li>📌Value Bonus = โบนัสขนาดปลา เพิ่มโบนัสที่จะทำให้ได้ปลาตัวใหญ่ขึ้นสำหรับแหล่งน้ำแต่ละชนิด</li>
</ul>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/nzgM2cq/baitguide.png" 
      alt="bait"
        width={1100}
        height={900}
        priority
        />
            </div>
        </div>
        
        <div className="flex flex-col">
                <div className="flex-1 text-center">
                <div className="px-6 pt-4"></div>
  <button className="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-blue-800 font-medium border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 rounded-lg hover:bg-blue-600 disabled:opacity-50">
  <li><Link href="/Guide" passHref >กลับหน้า แนะนำการเล่น</Link></li>
  </button>
  <button className="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-blue-800 font-medium border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 rounded-lg hover:bg-blue-600 disabled:opacity-50">
  <li><Link href="/" passHref>กลับหน้า คำนวนผลผลิต</Link></li>
  </button>
  <div className="px-6 pt-4"></div>
</div>
</div>
             </div>
        </div>
     
  );
};
export default fishingrod;