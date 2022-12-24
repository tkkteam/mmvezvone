import Head from "next/head";
import Image from "next/image";
import Navbackdaruma from "../../components/Navbackdaruma";

function daruma() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>กิจกรรม DARUMA 888</title>
      </Head>
      <Navbackdaruma/>
      <div className="sm:max-w-screen-lg gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-yellow-500 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-xl font-medium text-center text-black">กิจกรรม LUCKY POOL CHAINZ888</h1>
      </div>
      <div className="card bg-red-500 flex flex-col p-4 space-y-3 overflow-hidden shadow-lg">
          <h1 className="text-xl font-medium text-center text-black">ผู้ถูกรางวัล</h1>
      </div>
      <div className="flex-1 text-center">
          <Image
                src="https://i.ibb.co/7pcfd81/winner.jpg"
                alt="CHAINZ888"
                width={800}
                height={800}
              />
              </div>
              
        
      </div>
      </div>
      
    
  );
};

export default daruma;