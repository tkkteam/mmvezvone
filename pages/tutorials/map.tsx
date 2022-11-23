import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Nav from "../../components/Nav";


type mmvmap = "map" | "mapshow";
type allmap = "WORLDMAP" | "TheCrossing" | "FloralWoods" | "FORSAKENSANDS"| "POISONGARDEN"| "TOXICLAKE"| "TROPICALBEACH";

const mapmmv: NextPage = () => {
  const [mmvmap, defaultmap] = useState<mmvmap>("map");
  const [allmap, Loadmap] = useState<allmap>("WORLDMAP");


  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>แผนที่เกม MorningMoon Village</title>
      </Head>

      <Nav />

      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <div className="btn-group self-center">
          
            <button
              className={`${mmvmap === "map" ? "p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300 text-center" : ""}`}
              onClick={() => {
                defaultmap("map");
                switch (allmap) {
                  case "WORLDMAP":
                   
                    break;
                  case "TheCrossing":
                   
                    break;
                  case "FloralWoods":
                   
                    break;
                  case "FORSAKENSANDS":
                    break;

                  case "POISONGARDEN":
                   
                    break;
                  case "TOXICLAKE":
                   
                    break;
                  case "TROPICALBEACH":
                    break;
                }
              }}
            >
              รวมแผนที่แมพ MorningMoon Village
            </button>
          </div>

          

          {mmvmap !== "mapshow" && (
            <div className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 self-center">
              <button
                className={`text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "WORLDMAP" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("WORLDMAP");
                  switch (mmvmap) {
                    case "map":
                     
                      break;
                  }
                }}
              >
                worldmap
              </button>

              <button
                className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "TheCrossing" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("TheCrossing");
                  switch (mmvmap) {
                    case "map":
                     
                      break;
                  }
                }}
              >
                TheCrossing
              </button>

              <button
                className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "FloralWoods" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("FloralWoods");
                  switch (mmvmap) {
                    case "map":
                     
                      break;
                  }
                }}
              >
               FloralWoods
              </button>

              <button
                className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "FORSAKENSANDS" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("FORSAKENSANDS");
                  switch (mmvmap) {
                    case "map":
                      break;
                  }
                }}
              >
               FORSAKENSANDS
              </button>
              <button
                className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "POISONGARDEN" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("POISONGARDEN");
                  switch (mmvmap) {
                    case "map":
                      break;
                  }
                }}
              >
              POISONGARDEN
              </button>
              <button
                className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  allmap === "TOXICLAKE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  Loadmap("TOXICLAKE");
                  switch (mmvmap) {
                    case "map":
                      break;
                  }
                }}
              >
               TOXICLAKE
              </button>
              <button
               className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                allmap === "TROPICALBEACH" ? " btn-active" : ""
              }`}
              
                onClick={() => {
                  Loadmap("TROPICALBEACH");
                  switch (mmvmap) {
                    case "map":
                      break;
                  }
                }}
              >
               TROPICALBEACH
              </button>
            </div>
            
          )}
           </div>
           </div>
            
           <div className="flex flex-col">
      <div className="flex-1 text-center">
      <Image
              src={
                mmvmap === "mapshow"
                  ? "/map/map_worldmap.png"
                  : `/map/map_${allmap}.png`
              }
              alt="plant_kind"
              width={900}
              height={500}
            />
            </div>
            </div>
            </div>
        
  );
};
export default mapmmv;
