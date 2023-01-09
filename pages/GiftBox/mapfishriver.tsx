import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Nav from "../../components/Nav";


type fishriver = "map" | "mapshow";

type allriver = "FLORALWOODSRIVER" | "FLOODERCAVELAKE" | "VENOMOUSHOLLOW" | "TOXICLAKELAKE" |
 "TROPICALBEACHSEA" | "WINDYFIELDRIVER"|"CRYSTALCAVERN3FLAKE"|"THEMOONTREELAKE";


const mapmmv: NextPage = () => {
  const [fishriver, defaultmap] = useState<fishriver>("map");
  const [allriver, Loadmap] = useState<allriver>("FLORALWOODSRIVER");


  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>สถานที่ตกปลา</title>
      </Head>

      <Nav />

      <div className="xl:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">

        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <div className="btn-group self-center">

            <button
              className={`${fishriver === "map" ? "p-2 pl-5 pr-5  text-red-500 text-lg text-center" : ""}`}
              onClick={() => {
                defaultmap("map");
                switch (allriver) {
                  case "FLORALWOODSRIVER":

                    break;
                  case "FLOODERCAVELAKE":

                    break;
                  case "VENOMOUSHOLLOW":

                    break;
                  case "TOXICLAKELAKE":
                    break;

                  case "TROPICALBEACHSEA":

                    break;
                  case "WINDYFIELDRIVER":

                    break;
                  case "CRYSTALCAVERN3FLAKE":

                      break;
                  case "THEMOONTREELAKE":

                      break;
                  
                }
              }}
            >
             รวมสถานที่ตกปลา และของดรอปแหล่งน้ำต่างๆ
            </button>
       
          </div>

          <div className="flex flex-col">
        <div className="flex-1 text-center">
            <Image 
            width={800}
            height={500}
            src="/map/MAPMMV.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto rounded-lg"
          />

         
          </div>
          </div>
          <h1 className="text-lg font-medium text-center">คลิกดูไอเทมดรอปตามชื่อแผนที่ได้เลยครับ</h1>
          
          {fishriver !== "mapshow" && (
            <div className="relative  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-6 space-y-4">
            
            <div className="p-2 pl-5 pr-5 text-center px-16">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/FDYDZW0/floralwoods.png"
            objectFit="cover"
            alt="mmv_logo"
          className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "FLORALWOODSRIVER" ? " btn-active" : ""}`}
                onClick={() => {
                  Loadmap("FLORALWOODSRIVER");
                  switch (fishriver) {
                    case "map":

                      break;
                  }
                }}
               />

              <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/wc6hQ33/FLOODERCAVE.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "FLOODERCAVELAKE" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("FLOODERCAVELAKE");
                  switch (fishriver) {
                    case "map":

                      break;
                  }
                }}
              />
                
              

                <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/Jdv7sxG/venomous.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "VENOMOUSHOLLOW" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("VENOMOUSHOLLOW");
                  switch (fishriver) {
                    case "map":

                      break;
                  }
                }}
             / >
                
              
              
                <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/x8YZJtv/toxiclake.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "TOXICLAKELAKE" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("TOXICLAKELAKE");
                  switch (fishriver) {
                    case "map":
                      break;
                  }
                }}
              />
                
              
                <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/SQs2Lg0/sea.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "TROPICALBEACHSEA" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("TROPICALBEACHSEA");
                  switch (fishriver) {
                    case "map":
                      break;
                  }
                }}
              />
                 
             <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/wzky5Jr/themoontree.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "THEMOONTREELAKE" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("THEMOONTREELAKE");
                  switch (fishriver) {
                    case "map":
                      break;
                  }
                }}
              />   
              
             
              
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/mtZ1wXb/windyfield.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "WINDYFIELDRIVER" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("WINDYFIELDRIVER");
                  switch (fishriver) {
                    case "map":
                      break;
                  }
                }}
              />

            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/nkfyQJ8/crystal.png"
            objectFit="cover"
            alt="mmv_logo"
                className={`max-w-full h-auto rounded-lg hover:opacity-50${allriver === "CRYSTALCAVERN3FLAKE" ? " btn-active" : ""
                  }`}
                onClick={() => {
                  Loadmap("CRYSTALCAVERN3FLAKE");
                  switch (fishriver) {
                    case "map":
                      break;
                  }
                }}
              />
          </div> 
            </div>
          )}
          <div className="flex flex-col">
        <div className="flex-1 text-center">
          <Image
            src={
              fishriver === "mapshow"
                ? "/map/map_FLORALWOODSRIVER.png"
                : `/map/map_${allriver}.png`
            }
            alt="map"
            width={590}
            height={590}
          />
        </div>
      </div>
        </div>
        </div>
        </div>

  );
};
export default mapmmv;
