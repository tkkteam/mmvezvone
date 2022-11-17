import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


function imploss() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>Impermannent loss- MorningMoon Village</title>
      </Head> 
      <Navbar />
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>Impermannent loss คืออะไร</p>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/Ns1tHbz/IM01.jpg" 
      alt=""
        width={900}
        height={600}
        priority
        />
         </div>
            </div>
    <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>วันนี้ ADMIN มายกตัวอย่างให้ดู</p>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/9245kRZ/IM02.jpg" 
      alt=""
        width={900}
        height={600}
        priority
        />
            </div>
             </div>
         <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>ดูอันต่อไปได้เลย</p>
        </div>
        <div className="flex flex-col">
            <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/fYyByLP/IM04.jpg" 
      alt=""
        width={900}
        height={600}
        priority
        />
            </div>
            </div>

        <div className="flex flex-col">
            <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/5X0Kqv1/IM03.jpg" 
      alt=""
        width={900}
        height={600}
        priority
        />
            </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/DKmkRgc/IM05.jpg" 
      alt=""
        width={900}
        height={600}
        priority
        />
            </div>
              </div>
             
              <div className="flex flex-col">
                <div className="flex-1 text-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  <li><Link href="/Guide">กลับหน้า แนะนำการเล่น</Link></li>
  </button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  <li><Link href="/">กลับหน้า คำนวนผลผลิต</Link></li>
  </button>
</div>
</div>

              </div>
  ); 
};
export default imploss;