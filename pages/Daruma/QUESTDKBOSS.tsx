import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbackdaruma from "../../components/Navbackdaruma";

function daruma() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>กิจกรรม DARUMA 888</title>
      </Head>
      <Navbackdaruma/>
      <div className="sm:max-w-screen-lg gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-yellow-500 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-xl font-medium text-center text-black">Dice Kingdom [DK] กิจกรรม ล่าบอส CHAINZ888</h1>
      </div>
      <div className="flex-1 text-center">
          <Image
                src="https://i.ibb.co/NK7nFxt/321667020-1165113277461098-8348702197848549349-n.jpg"
                alt="CHAINZ888"
                width={800}
                height={400}
              />
              </div>
              <div className="card bg-yellow-200 text-black  text-lg flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
        <div>
      <button type="button" className="bg-blue-600 text-white p-2 rounded  leading-none flex items-center">
      วิธีร่วมสนุกไปกับ DARUMA NFT HOLDER<span className="bg-white p-1 rounded text-blue-600 text-xs ml-2">1</span>
      </button>
        </div>   

        <p>1.คนที่ถือ NFT DARUMA เข้าเล่นเกม Dice Kingdom [DK] เจอชื่อ CHAINZ888 (เวลาประมาน 20:00 - 24:00)<Link href="https://play.dicekingdom.com/">
    <a target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        เข้าเกม Dice Kingdom</button></a>
    </Link></p>
        <p>ร่วมพูดคุยกันในเกม ตัวละคร "DARUMA888" ทักอีโมจิใส่แว่นมารัวๆซัก 3 ที</p>
        <p>***แล้วแคปหน้าจอมาส่งในกลุ่มไลน์***</p>
        <p className="text-red-600">รับ +0.0888 KUB แจก 10 รางวัล / วัน เจอซ้ำรับซ้ำได้</p>
        <p>2. ถ้าตานั้น NFT Holder ทำ BOSS CHAINZ888 ล้มละลายได้</p>
        <p className="text-red-600">รับ +0.0888 KUB แจก 10 รางวัล / วัน (ช่วยกันรางวัลหารสอง)</p>
        <p>3. ถ้าตานั้น NFT Holder โดนทำ/ทำให้ตัวเองล้มละลาย</p>
        <p className="text-red-600">รับ +0.888 KUB แจก 3 รางวัล / วัน</p>
        <p className="text-xl text-red-700">#SSR DARUMA HOLDER รับรางวัล +8%</p>
        
        
      </div>
      </div>
      </div>
    
  );
};

export default daruma;