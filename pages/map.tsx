import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

 function map() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แผนที่ในเกม- Morningmoon</title>
      </Head> 
      <Navbar />
      <div className="w-full p-10">
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>รวมแผนที่ในเกมพร้อมบอกตำแหน่งของดรอปต่างๆ</p>
        </div>
        <div className= "text-1xl overline flex items-center justify-center">
        <p>MorningMoon Village</p>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/01.png" 
      alt="Picture of the author"
        width={850}
        height={500}
        priority
        />
            </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/The Crossing.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
        priority
        />
             </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/Floral Woods.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
        priority
        />
             </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/FORSAKEN SANDS.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
        priority
        />
              </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/POISON GARDEN.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
        priority
        />
             </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/TOXIC LAKE.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
        priority
        />
             </div>
        </div>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/map/TROPICAL BEACH.jpg" 
      alt="Picture of the author"
        width={850}
        height={400}
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
        </div>
     
  );
};
export default map;