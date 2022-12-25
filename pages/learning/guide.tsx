import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">เกร็ดความรู้ทั่วไปเกี่ยวกับเกม MorningMoon Village</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/1" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
          </Link>
    
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>เกร็ดความรู้ THE MAYOR</p>
	</h2>
  </div>

  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/2" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
          </Link>
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>ฟาร์ม Fish Pond (ฟาร์มบ่อปลา)</p>
	</h2>
  </div>

  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/3" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
          </Link>
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>Material Box คืออะไร</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/tutorials/imploss" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
          </Link>
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>Impermannent loss คืออะไร</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/4" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
         </Link>
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>JEWELRY คืออะไร</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/5" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
        </Link>
</div>
	  </div>
	</div>
  
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>ข้อมูลกล่อง Orange Box</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    <Link href="/learning/6" passHref>
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/NxP91Sr/work.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
         </Link>
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>การ์ดบิงโก</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/3kTLrqb/comingsoon.jpg"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
         
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>coming soon</p>
	</h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow">
	<div>
	  <div className="relative block h-full">
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg ">
    
    <Image 
            width={450}
            height={350}
            src="https://i.ibb.co/3kTLrqb/comingsoon.jpg"
            objectFit="cover"
            alt="mmv_logo"
            className=" object-cover w-full  hover:opacity-50"
          />
         
</div>
	  </div>
	</div>
	<h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
  <p>coming soon</p>
	</h2>
  </div>
  </div>
  
  
     
      

</div>
      </div>
  );
};
export default guide;
