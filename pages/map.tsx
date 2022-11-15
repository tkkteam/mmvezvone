import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
       
             </div>
             <div className="inline-flex flex items-center justify-center rounded-md" role="group">
      <div className= "p-2 text-2xl  flex items-center justify-center">
  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  <Link href="/">
            <h3 className="text-1xl font-bold">กลับหน้าหลัก</h3>
          </Link>
  </span>
</button>
</div>
</div>
        </div>
     
  );
};
export default map;