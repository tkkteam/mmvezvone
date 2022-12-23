import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navback from "../../components/Navback";

function cmdun() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>CM Dungeon</title>
      </Head>
      <Navback/>
      <div className="sm:max-w-screen-lg gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-yellow-500 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-xl font-medium text-center text-black">CM Dungeon (Beta Test )</h1>
      </div>
      <div className="flex-1 text-center">
          <Image
                src="https://i.ibb.co/QvVX5Yy/CMDUN.png"
                alt="backmemu"
                width={900}
                height={350}
              />
              </div>
      <div className="card bg-yellow-200 text-black  flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
        <div>
      <button type="button" className="bg-blue-600 text-white p-2 rounded  leading-none flex items-center">
      วิธีทำเควส CM Dungeon ลุ้นรับรางวัล เหรียญ CM<span className="bg-white p-1 rounded text-blue-600 text-xs ml-2">1</span>
      </button>
        </div>   

        <p>1. User ต้องเล่นเกม Morning Moon Village ผ่าน Metamask เข้าเกมได้ที่นี่  <Link href="https://play.morningmoonvillage.com">
    <a target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        เข้าเกม Morning Moon Village</button></a>
    </Link></p>
        <p>2. เชื่อม Metamask เพื่อรับเควสได้ที่เว็บนี้ <Link href="https://www.cmhexa.com/cmdungeon">
    <a target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    CMHEXA CMDUNGEON</button></a>
    </Link> </p>
        <p>3. กดรับเควส RECEIVE QUEST</p>
        <p>4. เข้าป่า PINE VALLEY หรือแมพใดก็ได้ที่มีต้นไม้ ทำภาระกิจสะสม wood ให้ครบ 20 ท่อน </p>
        <p>5. กลับมาส่งเควสที่เว็บ <Link href="https://www.cmhexa.com/cmdungeon">
    <a target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    CMHEXA CMDUNGEON</button></a>
    </Link></p>
        <p>6. กด F5 เพื่อ refresh 1 ครั้ง </p>
        <p>(ขั้นตอนนี้อยู่ในระหว่างปรับปรุงเมื่อเรียบร้อยแล้ว จะไม่ต้องทำขั้นตอนนี้)</p>
        <p>7. กด connect wallet ใหม่อีกครั้ง</p>
        <p>(ขั้นตอนนี้อยู่ในระหว่างปรับปรุงเมื่อเรียบร้อยแล้ว จะไม่ต้องทำขั้นตอนนี้)</p>
        <p>8. เสร็จแล้วกดส่งเควส จะได้รับ 1 CM Token</p>
        <p>9. รับโบนัสเพิ่ม CM NFT 1 ตัว รับเพิ่ม 10%</p>
        <p> เควสอยู่ในช่วงเริ่มต้น เป็นการทดสอบระบบ หากพบบัค หรือข้อผิดพลาดที่ควรปรับปรุง</p>
        <p>สามารถแจ้งผู้ดูแลระบบได้ที่ Facebook:<Link href="https://www.facebook.com/groups/morningmoonvillage">
    <a target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    ติดต่อแอดมินกลุ่มเพื่อแจ้งปัญหา</button></a>
    </Link></p>
        <p>เควสในอนาคตจะมีการปรับปรุง เควสในตอนนี้เป็นเควสทดสอบระบบ</p>
        
      </div>
      </div>
      </div>
    
  );
};

export default cmdun;