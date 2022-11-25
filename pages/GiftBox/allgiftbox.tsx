import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Nav from "../../components/Nav";


type giftbox = "Box" | "giftshow";

type allbox = "CowBox" | "GemShard" | "Angelic" | "Orange" |
 "Gemstone" | "Morning" | "TheCrossing"| "FloralWoods"| "PineValley"| "Material";


const Boxmmv: NextPage = () => {
  const [giftbox, defaultbox] = useState<giftbox>("Box");
  const [allbox, Loadbox] = useState<allbox>("CowBox");


  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>กล่องของขวัญ</title>
      </Head>

      <Nav />

      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">

        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <div className="btn-group self-center">

            <button
              className={`${giftbox === "Box" ? "p-2 pl-5 pr-5  text-red-500 text-lg text-center" : ""}`}
              onClick={() => {
                defaultbox("Box");
                switch (allbox) {
                  case "CowBox":

                    break;
                  case "GemShard":

                    break;
                  case "Angelic":

                    break;
                  case "Orange":
                    break;

                  case "Gemstone":

                    break;
                  case "Morning":

                    break;
                  case "TheCrossing":
                    break;
                   
                  case "FloralWoods":
                    break;
                    
                  case "PineValley":
                    break;

                  case "Material":
                    break;
                }
              }}
            >
              กล่องของขวัญ เปิดกล่องปริศนาเพื่อลุ้นรางวัล
            </button>
          </div>
          
          <p className="indent-8">กล่องของขวัญคืออะไร?</p>
          <p className="indent-8">
          กล่องของขวัญ คือกล่องที่จะมอบรางวัลเป็นสินทรัพย์ในเกมให้ผู้เปิดกล่องแบบสุ่ม กล่องของขวัญ
          มีหลายประเภทแต่ละประเภทจะให้รางวัลที่แตกต่างกัน
</p>


          {giftbox !== "giftshow" && (
            <div className="relative  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-6 space-y-4">
            
            <div className="p-2 pl-5 pr-5 text-center px-16">
              <button
                className={`bg-sky-500 hover:bg-gray-300  text-white px-5 py-2.5 focus:bg-gray-800${allbox === "CowBox" ? " btn-active" : ""
                
                  }`}
                onClick={() => {
                  Loadbox("CowBox");
                  switch (giftbox) {
                    case "Box":

                      break;
                  }
                }}
              >
              
                CowBox
              </button>

              <button
              
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-amber-500${allbox === "GemShard" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadbox("GemShard");
                  switch (giftbox) {
                    case "Box":

                      break;
                  }
                }}
              >
                
                GemShard
              </button>

              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-yellow-300${allbox === "Angelic" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadbox("Angelic");
                  switch (giftbox) {
                    case "Box":

                      break;
                  }
                }}
              >
                
                Angelic
              </button>
              
              
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-orange-500${allbox === "Orange" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadbox("Orange");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                
                Orange
              </button>
              
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-red-500${allbox === "Gemstone" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadbox("Gemstone");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                 
                Gemstone
              </button>
              </div>
              <div className="p-2 pl-5 pr-5 text-center px-16">
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-blue-700${allbox === "Morning" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadbox("Morning");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                
                    Morning
              </button>
              
              
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-cyan-600${allbox === "TheCrossing" ? " btn-active" : ""
                  }`}

                onClick={() => {
                  Loadbox("TheCrossing");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                 
                    TheCrossing
              </button>
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-pink-500${allbox === "FloralWoods" ? " btn-active" : ""
                  }`}

                onClick={() => {
                  Loadbox("FloralWoods");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                 
                 FloralWoods
              </button>
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-green-500${allbox === "PineValley" ? " btn-active" : ""
                  }`}

                onClick={() => {
                  Loadbox("PineValley");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                 
                 PineValley
              </button>
              <button
                className={`bg-sky-500 hover:bg-gray-300 text-white px-5 py-2.5 focus:bg-stone-700${allbox === "Material" ? " btn-active" : ""
                  }`}

                onClick={() => {
                  Loadbox("Material");
                  switch (giftbox) {
                    case "Box":
                      break;
                  }
                }}
              >
                 
                 Material
              </button>
              </div>
            </div>
          )}
          <div className="flex flex-col">
        <div className="flex-1 text-center">
          <Image
            src={
              giftbox === "giftshow"
                ? "/Box/Box_CowBox.png"
                : `/Box/Box_${allbox}.png`
            }
            alt="box"
            width={250}
            height={250}
          />
        </div>
      </div>
        </div>
      </div>

      

    </div>

  );
};
export default Boxmmv;
