import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function Weaponfish() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ตีบวกเบ็ดตกปลา</title>
      </Head> 
      <Navbar />
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกเบ็ดระดับ Rare</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/Bait/BaitRare.png" 
      alt=""
        width={1200}
        height={500}
        priority
        />
         </div>
            </div>
    <div className= "p-5 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกเบ็ดระดับ Epic</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/Bait/BaitEpic.png" 
      alt=""
        width={1200}
        height={500}
        priority
        />
            </div>
             </div>
             <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกเบ็ดระดับ Legendary</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className="flex flex-col">
  <div className="flex-1 text-center">
      <Image 
      src="/Bait/BaitLegendary.png" 
      alt=""
        width={1200}
        height={500}
        priority
        />
            </div>
            </div>

            <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกเบ็ดระดับ Relic</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก - หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className="flex flex-col">
  <div className="flex-1 text-center">
      <Image 
      src="/Bait/BaitRelic.png" 
      alt=""
        width={1200}
        height={500}
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
  ); 
};
export default Weaponfish;
