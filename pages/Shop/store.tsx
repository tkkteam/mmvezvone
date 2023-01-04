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
        <title>ร้านค้าขายไอเทมเกม MMV [Beta version]</title>
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
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-green-400 overflow-hidden">
                <thead className="bg-green-900">
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
                            <div className="flex items-center space-x-3 mx-auto">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/fGhJztw/admin1.jpg" /> </div>
                                <div>
                                    <p> Visarut RT </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ทีมงานแอดมิน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> แอดประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> ADMIN MMV</p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> ADMIN </span> </td>
                        <td className="px-6 py-4 text-center">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                สายข่าว
                                </button> 
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/sgVGdQK/admin2.jpg" /> </div>
                                <div>
                                    <p> Vutichai Kunpipat </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ทีมงานแอดมิน</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> แอดประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> ADMIN MMV</p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> ADMIN </span> </td>
                        <td className="px-6 py-4 text-center">
                        
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                แจก CM 
                                </button> 
                               
                                </td>
                    </tr>
                    </tbody>
            </table>
            
      <div className="min-h-screen bg-red-800 py-5 mx-auto">
        <div className="overflow-x-auto w-full">
        <div className="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Danger</span>
  <div>
    <span className="font-medium text-xl">รายชื่อร้านค้าในกลุ่มมีไว้เพื่ออำนวยความสะดวกให้ผู้ซื้อ:</span>
      <ul className="mt-1.5 ml-4 text-red-700 list-disc list-inside text-lg">
        <li>ทั้งนี้ผู้ซื้อต้องพิจารณาถึงความปลอดภัยในการซื้อขายด้วยตนเองอีกครั้ง</li>
        <li>ก่อนการซื้อขายควรตรวจสอบคนขายให้ดี ดูประวัติการขาย ดูเครดิต</li>
    </ul>
  </div>
</div>
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-red-300 overflow-hidden">
                <thead className="bg-blue-400">
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
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/SKpLzG8/saller08.jpg" /> </div>
                                <div>
                                    <p> Bam Sirapim </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เจมตีมอน #อาวุธ #เซ็ตล่าบอส #Logky #Ozzy</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#ของคราฟ #ของตีบวก #เหรียญ #เมล็ด #ผลผลิต</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#น้ำยาผสมพันธุ์</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/784981892739847/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1819800898/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0x6A541A6b01614D5E738e3CE561aD82c35313804">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
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
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/818543739383662/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100015492672034/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                
                            <Link href="https://www.megaland.io/profile?walletAddress=0x001168BF78E0b34482dF21a8ef503E4E8488f529">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ozzy #logky</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                       
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ยังไม่มี
                        </span> 
                       
                        </td>
                        
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100022699721712/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <button 
                            type="button" 
                            className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856345202270182/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100005018162224/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                 <Link href="https://www.megaland.io/profile?walletAddress=0x0d0EC911a56F4A33cCD6200B43dc3D022A689316">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/581962076375164/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100004755755153/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856341002270602/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100001296415557/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0x760f2f2dB43Dd24f53DF2A6AD50aEf1aBC61fB3d">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/616842516220453/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100008213138929/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/842524433652259/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100000217024756/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0x73E81Ae6DfC9BAF00c3b2cA7f9762FF3C51dA975">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856359278935441/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1711343042/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                 <Link href="https://www.megaland.io/profile?walletAddress=0x8bF04464dEA097A958e86ae5DE02F83f49ef0813">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856352975602738/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100007301565133/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                 <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/bdKdbMY/saller13.jpg" /> </div>
                                <div>
                                    <p> บัญชีนี้ไม่ได้รอใครกลับมาฯ </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ #เมล็ด</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856365298934839/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100067437009710/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0xC349a029fA8a047918d4261792ffcdB586AaeaFF">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/653595432545161/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100008353654870/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0x45B2CE95A945a4E1201D3516f0Fc42FbD4EBACE6">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                       
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ยังไม่มี 
                        </span> 
                        
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100051086674966/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/crTBrPF/saller14.jpg" /> </div>
                                <div>
                                    <p> Rattanakorn Janchatmongkol </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/731188778119159/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1348203250/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io/profile?walletAddress=0x2285D4f4FFe008D4E0ECAda5Fc12a6cE3FeD932e">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://i.ibb.co/WynVXpF/saller15.jpg" /> </div>
                                <div>
                                    <p> จอมยุทธเอ๋ เนเวอร์ดายส์ </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> 
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/640163733888331/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100003551505560/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/JzPcVsf/saller16.jpg" /> 
                                </div>
                                <div>
                                    <p> YokYeen Kanmotarn </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ(Lumi) #เมล็ด </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856615828909786/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        
                        </span> 
                        </a>
                        </Link>
                         </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100000504822636/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                               <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/JCWstz9/saller17.jpg" /> 
                                </div>
                                <div>
                                    <p> Pawarut Parkpean </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ผลไม้  #เหรียญ(Lumi) #เมล็ด  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856379448933424/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100027721032413/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/JqX2nfP/saller18.jpg" /> 
                                </div>
                                <div>
                                    <p> BungAnt OkaShi </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856374058933963/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100000446958525/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/K20CjRD/saller19.jpg" /> 
                                </div>
                                <div>
                                    <p> Dulpithak Vivattananukull </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของคราฟ #เจมตีมอน #ของตีบวก #อาวุธ #เซ็ตล่าบอส</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#เหรียญ(Lumi) </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/3310979349187170/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100001890881736/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                               <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/nmFpskc/saller20.jpg" /> 
                                </div>
                                <div>
                                    <p> ฉัน ไม่ใช่ผู้วิเศษ </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #แร่ #เจมตีมอน #ของคราฟ #ของตีบวก #เหรียญ(Lumi)  </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856358938935475/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
                       
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100001989515479/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/2y4kxQJ/saller21.jpg" /> 
                                </div>
                                <div>
                                    <p> Wuttichai Raksapon </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ผลไม้ </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/680327963205241/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100056164921609/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/DLNQjrG/saller22.jpg" /> 
                                </div>
                                <div>
                                    <p> Buay Chalern Romphoyai</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ #ผลผลิต </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856500858921283/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1760613707/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/mBj9Qt4/saller23.jpg" /> 
                                </div>
                                <div>
                                    <p> Tanuki Nighttenji</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เจมตีมอน #อาวุธ #ผ้าคลุม #LOGKY #ของคราฟ</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#ของตีบวก #ผลไม้ #เหรียญ #เมล็ด </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/731179114786792/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100000002275506/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/TTJJ91H/saller24.jpg" /> 
                                </div>
                                <div>
                                    <p> เรื่องของ วันพรุ่งนี้</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #แร่ #เจมตีมอน #อาวุธ #ถุงมือ #รองเท้า #ผ้าคลุม</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#แหวน #คิวปิด #LOGKY #ของคราฟ #ของตีบวก #ผลไม้ </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">#เหรียญ #เมล็ด #ผลผลิต #ยาเพิ่มเลือด</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856513155586720/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100009313426807/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                                <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/h2w6Tvz/saller25.jpg" /> 
                                </div>
                                <div>
                                    <p> Jakkrit Wongsamut</p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #ของคราฟ #เหรียญ #ผลผลิต </p>
                                
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/835320414372661/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/1389056083/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
                               <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/ZJnHs20/saller26.png" /> 
                                </div>
                                <div>
                                    <p> Suttisak Tantiroongruangkul </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ #ของตีบวก #Logky #ozzy</p>
                                
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856508822253820/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100001927470354/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>

                             <Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
                                </button> 
                                    </a>
                                </Link>
                                
                                </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div className="inline-flex w-10 h-10"> 
                                <img className="w-10 h-10 object-cover rounded-full" 
                                alt="User avatar" 
                                src="https://i.ibb.co/s13BFf5/saller26.jpg" /> 
                                </div>
                                <div>
                                    <p> เฒ่าแก่ เกาลัด </p>
                                    <p className="text-red-500 text-sm font-semibold tracking-wide">ขาย #เหรียญ</p>
                                
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <p className=""> คนขายประจำกลุ่ม </p>
                            <p className="text-red-500 text-sm font-semibold tracking-wide"> MMV seller </p>
                        </td>
                        <td className="px-6 py-4 text-center"> 
                        <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span>
                    
                        <Link href="https://www.facebook.com/groups/morningmoonvillage/posts/776606723577364/">
                                    <a target="_blank">
                        <span className="text-black text-sm w-1/3 pb-1 bg-yellow-400 font-semibold px-2 rounded-full"> 
                        ดูเครดิต 
                        </span> 
                        </a>
                        </Link>
    
                        </td>
                        <td className="px-6 py-4 text-center">
                        <Link href="https://www.facebook.com/groups/491556275415745/user/100045217209461/">
                                    <a target="_blank">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ดูสินค้า
                                </button> 
                                </a>
                                </Link>
								<Link href="https://www.megaland.io">
                                    <a target="_blank">
                                <button 
                                    type="button" 
                                    className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Megaland
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
