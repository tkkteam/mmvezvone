import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";


function Bait() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ตีบวกเบ็ดตกปลา- MorningMoon Village</title>
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
              </div>
  ); 
};
export default Bait;
