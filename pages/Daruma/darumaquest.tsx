import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navback from "../../components/Navback";


type daruma = "Box" | "giftshow";

type alldaru = "Quest1" | "Quest2" ;


const DARUMA888: NextPage = () => {
  const [daruma, defaultbox] = useState<daruma>("Box");
  const [alldaru, Loaddaruma] = useState<alldaru>("Quest1");


  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>DARUMA888</title>
      </Head>

      <Navback />

      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-red-600 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-xl font-medium text-center text-black">รวมกิจกรรม DARUMA NFT HOLDER BY CHAINZ888</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-auto">
          <Link href="/Daruma/QUESTLUCKY">
          
            <button className="group relative h-12 w-60 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">DARUMA LUCKY POOL</span>
            </button>
          
        </Link> 
        <Link href="/Daruma/QUESTDKBOSS">
          
            <button className="group relative h-12 w-60 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">BOSS-CHAINZ888[DK]</span>
            </button>
          
        </Link> 
        </div>
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <div className="btn-group self-center">
        
          <p className="text-xl">Mroning Moon Village </p>
          
            <button
              className={`${daruma === "Box" ? "p-2 pl-5 pr-5  text-red-500 text-lg text-center" : ""}`}
              onClick={() => {
                defaultbox("Box");
                switch (alldaru) {
                  case "Quest1":

                    break;
                  case "Quest2":

                    break;
                 
                }
              }}
            >
              
            </button>
          </div>
          {daruma !== "giftshow" && (
            <div className="relative  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-6 space-y-4">
            
            <div className="p-2 pl-5 pr-5 text-center px-16">
              <button
                className={`bg-sky-500 hover:bg-red-500  text-white px-5 py-2.5 focus:bg-amber-500${alldaru === "Quest1" ? " btn-active" : ""
                
                  }`}
                onClick={() => {
                  Loaddaruma("Quest1");
                  switch (daruma) {
                    case "Box":

                      break;
                  }
                }}
              >
              
              กิจกรรมขายปลา
              </button>

              <button
              
                className={`bg-sky-500 hover:bg-red-500 text-white px-5 py-2.5 focus:bg-red-600${alldaru === "Quest2" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loaddaruma("Quest2");
                  switch (daruma) {
                    case "Box":

                      break;
                  }
                }}
              >
                
                กิจกรรมตกปลา
              </button>

              
              
              </div>
            </div>
          )}
          <div className="flex flex-col">
        <div className="flex-1 text-center">
          <Image
            src={
              daruma === "giftshow"
                ? "/daruma/Box_Quest1.png"
                : `/daruma/Box_${alldaru}.png`
            }
            alt="daruma"
            width={900}
            height={1200}
          />
        </div>
      </div>
        </div>
      </div>

      

    </div>

  );
};
export default DARUMA888;
