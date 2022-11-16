import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";


 function weapon() {
  return (
    <div className="bg-base-200 flex flex-col w-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ตีบวกอุปกรณ์- MorningMoon Village</title>
      </Head> 
    
      <Navbar />
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกอาวุธ The Mayor</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก-หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className= " text-2xl  flex items-center justify-center">
        <div className="flex flex-row p-5">
        <div className="tooltip peer-hover:visible self-center"data-tip="tool-fragment">
            <button>
            <img  src="/item/tool-fragment.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="rag">
            <button>
            <img  src="/item/rag.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="scrap-metal">
            <button>
            <img  src="/item/scrap-metal.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="leather-piece">
            <button>
            <img  src="/item/leather-piece.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="LUMI">
            <button>
               <img  src="/item/lumi.png"
               width={50}
               height={50}
               alt=""
               />
              </button>
            </div>
                </div>
                    </div>
            
      <div className="flex flex-col">
      <div className="flex-1 text-center">
      <Image 
      src="/weapon/001.png" 
      alt="shop"
        width={850}
        height={500}
        priority
        />
            </div>
            </div>
        <div className= " p-5 text-2xl  flex items-center justify-center">
        <p>ตารางตีบวกอาวุธจากกล่อง200LUMI ร้านค้า The Mayor LEVEL 3</p>
        </div>
        <div className= "p-2 text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก-หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className= " text-2xl  flex items-center justify-center">
        <div className="flex flex-row p-5">
        <div className="tooltip peer-hover:visible self-center"data-tip="tool-fragment">
          
            <button>
            <img  src="/item/tool-fragment.png"
             width={50}
             height={50}
             alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="rag">
            <button>
            <img  src="/item/rag.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="scrap-metal">
            <button>
            <img  src="/item/scrap-metal.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="leather-piece">
            <button>
            <img  src="/item/leather-piece.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="runic-essence">
            <button>
            <img  src="/item/runic-essence.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="mystic-oil">
            <button>
            <img  src="/item/mystic-oil.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="arcane-powder">
            <button>
            <img  src="/item/arcane-powder.png"
            width={50}
            height={50}
            alt=""
            />
              </button>
            </div>
            <div className="tooltip peer-hover:visible self-center"data-tip="LUMI">
            <button>
               <img  src="/item/lumi.png"
               width={50}
               height={50}
               alt=""
               />
              </button>
            </div>
                </div>
                    </div>
            
      <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="/weapon/002.png" 
      alt="shop"
        width={850}
        height={500}
        priority
        />
          </div>
            </div>
             </div>
             
                
  );
};
export default weapon;
