import type { NextPage } from "next";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Navbar from "../components/Navbar";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Image from "next/image";

const Home: NextPage = () => {
    
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>Morning Moon Village Calculator</title>
      </Head>   
      
      <Navbar />
      <div>
      <div className="text-green-500">
      <Marquee
        speed={70}
        style={{
          height: 40
        }}
      >
        
        <p>เซิร์ฟเวอร์เปิดให้บริการตามปกติ หากทางผู้เล่นพบปัญหาในการเล่นเกม สามารถแจ้งปัญหาหรือติดต่อได้ที่ Facbook:<Link href="https://www.facebook.com/MorningMoonVillageOfficial">
            <a target="_blank">
           MorningMoonVillageOfficial
            </a>    
          </Link>
        </p>   
      </Marquee>
      </div>
  </div> 

<div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
<div className="grid grid-cols-2 gap-4 mx-auto">
        <Link href="/price"> 
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">ราคาเหรียญ</span>
            </button>
        </Link>
        <Link href="/calculator">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">คำนวณผลผลิต</span>
            </button>
        </Link>
        <Link href="/Guide">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">แนะนำการเล่น</span>
            </button>
        </Link>
    
        <Link href="https://mmvplus.vercel.app/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">MMV สลากพลัส</span>
            </button>
            </a>
        </Link>

        <Link href="https://www.cmhexa.com/lookdo/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">เช็คจำนวน Token</span>
            </button>
            </a>
        </Link>  
        <Link href="https://www.p2pcontract.finance/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">p2pContract</span>
            </button>
            </a>
        </Link> 
        
        </div>  
        <div className="card bg-yellow-400 flex flex-col p-2 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg text-black font-medium text-center">Facebook Partner</h1>
      </div>
      <div className="grid grid-cols-6 gap-4 mx-auto">
        
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.facebook.com/MorningMoonVillageOfficial">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/ftr6j5j/mmvoff.jpg"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto rounded-lg"
          />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.facebook.com/PondKub101">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/qF2vLbb/PONDKUB.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto rounded-lg"
          />
            </a>
          </Link>
    </div>
    
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.facebook.com/groups/3234826200135819">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/bdtDWLB/mmvmarket.jpg"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
          />    
           </a>
          </Link>
    </div>

    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.facebook.com/Bitkubacademy">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/vxx5wPz/bkacademy.jpg"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto rounded-lg"
          />
            </a>
          </Link>
    </div>

    <div className="w-full rounded hover:opacity-50">
        <Link href="https://www.facebook.com/cmhexa">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/7nNCVY8/CM.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto rounded-lg"
          />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    
    <Link href="https://www.facebook.com/groups/665357544709164">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/tHwGpS3/mmvfree.jpg"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
          />      
          </a>
          </Link>
    </div>

    </div>
        <div className="p-2 pl-5 pr-5 bg-red-400 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300 text-center">
        <YoutubeEmbed embedId="vwyCEJmu3Iw" />
        </div> 
      
        
        <div className="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300 text-center">
        <p>ช่อง Youtube ที่สอนเทคนิคการเล่นเกม Morningmoon Village</p>
        </div> 
        <div className="container grid grid-cols-3 gap-2 mx-auto">
        <div className="w-full rounded hover:opacity-50">
        <Link href="https://www.youtube.com/channel/UC6h8YpdgLs4YN8yHW4fYOPg">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/ZYwDGjT/Pondkub.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/channel/UC75j9pHrdLinOMcfLjUXQIg">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/j35vh3V/278910218-115917581077317-6456500243265992292-n.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/channel/UCxXyGeUUE8iYLbX5krjhHzA">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/80K5vWM/273485701-117076550882644-8357820669049442954-n.jpg" />       
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/c/CryptoRockBand">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/41WSCpX/Crypto-Rock.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/user/Huanathapong">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/g6cF7Zg/hua.jpg" />       
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/c/CHAINZ888">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/DRhjX3M/chainz888.jpg" />       
            </a>
          </Link>
    </div>
    </div>
      </div>
      <footer className="footer bg-neutral text-neutral-content items-center gap-4 p-4">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved Powerby TATUM-IT</p><p>Credit artzeeker</p>
        </div>
        <div className="md:place-self-center md:justify-self-end grid-flow-col gap-4">
          <Link href="https://www.facebook.com/tatummaster">
            <a target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://www.youtube.com/watch?v=QFn2MdESHJo&t=3s&ab_channel=TATUMOFFICIAL">
            <a target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </footer>
        </div>
  );
};
export default Home;