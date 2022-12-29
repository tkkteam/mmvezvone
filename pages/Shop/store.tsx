import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function store() {
  return (
    <div className="bg-red-800 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
         <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="font-bold">หากโดนโกงอย่านิ่งเฉย รายงานเพื่อเตือนภัยสังคม แล้วจะไม่มีใครถูกหลอกเป็นครั้งที่สอง</p>
      <p className="text-sm">โปรดซื้อขายอย่างมีสติ ดูให้แน่ใจก่อนโอนเงินทุกครั้ง</p>
    </div>
  </div>
</div>
    <Head>
        <title>ร้านค้าขายไอเทมเกม MMV</title>
      </Head> 
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ร้านค้าขายไอเทมเกม Morning Moon Village</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-auto">
        <Link href="https://www.blacklistseller.com/"> 
        <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">แจ้งผู้ขายที่ควรระวัง</span>
            </button>
            </a>
        </Link>  
        </div>  


      </div>
      <div className="min-h-screen bg-red-800 py-5">
        <div className="overflow-x-auto w-full">
            
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-red-300 overflow-hidden">
                <thead className="bg-red-900">
                    <tr className="text-white text-left">
                        <th className="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4"> Designation </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-red-200">
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/WtgVycq/saller01.jpg" /> </div>
                                <div>
                                    <p> Hutsachai Jae Rainadee </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #แร่ #เหรียญ(Lumi)</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100015492672034/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/Rj3vnkM/saller02.jpg" /> </div>
                                <div>
                                    <p> อนุชา ชัยเสนา </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขายไก่ย่าง ยาเสน่ห์</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100022699721712/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/cg4kfjL/saller03.jpg" /> </div>
                                <div>
                                    <p> Soopachai </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของตีบวก #ozzy #logky #เจมตีมอน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100005018162224/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/TL8M7ds/saller04.jpg" /> </div>
                                <div>
                                    <p> Jay Chusak </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #อาวุธ #เซ็ตล่าบอส #ถุงมือ #รองเท้า #ผ้าคลุม #แหวน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100004755755153/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/9G62ZQM/saller05.png" /> </div>
                                <div>
                                    <p> Vorapong Paladkong </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของคราฟ #ของตีบวก #เจมตีมอน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100001296415557/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/FDxsRPT/saller06.png" /> </div>
                                <div>
                                    <p> Suttirak Srimugda </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ #ผลไม้ #ของตีบวก</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100008213138929/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/Ln1mZvq/saller07.jpg" /> </div>
                                <div>
                                    <p> J JayJakrapan Supakeeratirod </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของตีบวก #ของคราฟ #อื่นๆ</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100000217024756/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/SKpLzG8/saller08.jpg" /> </div>
                                <div>
                                    <p> Bam Sirapim </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ทุกอย่าง</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1819800898/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/wyL6d8B/saller09.jpg" /> </div>
                                <div>
                                    <p> Tossaphon Numpeth </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #แร่ #เจมตีมอน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1711343042/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/2ycKSj7/saller10.png" /> </div>
                                <div>
                                    <p> Wittawat Payappanon </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของคราฟ  #ของตีบวก  #เจมตีมอน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100007301565133/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/JxK3ZkJ/saller11.jpg" /> </div>
                                <div>
                                    <p> บัญชีนี้ไม่ได้รอใครกลับมาฯ </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขายไก่ย่าง ยาเสน่ห์</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100067437009710/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/JxK3ZkJ/saller11.jpg" /> </div>
                                <div>
                                    <p> PN Darkqueen </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เจมตีมอน #เซ็ตล่าบอส #ของคราฟ </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100008353654870/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/strWjqn/saller12.jpg" /> </div>
                                <div>
                                    <p> Nil Pattalapon </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เจมตีมอน  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100051086674966/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}
