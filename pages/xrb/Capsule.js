import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";
import React from "react";


function Capsule() {
   
    return <>
        
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>Capsule chart price</title>
      </Head> 
      <Nav />
      
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">

      <div className="card bg-base-100 flex flex-col p-2 space-y-2 overflow-hidden shadow-lg">
        <div className="flex-1 text-center">
          <p>Capsule chart price</p>
          <Image
                src="/images/cap.png"
                alt="cap"
                width={100}
                height={100}
              />
              </div>
         <iframe src="https://martserver.dyndns.org/support/Chart.php?TokenAddress=0xb973de1fabdd269ea2e6710151516d40c82585ef&timeselect=24h" width="600" height="350"></iframe>
        </div> 
        </div> 
        
        </div>
    </>
}
export default Capsule;