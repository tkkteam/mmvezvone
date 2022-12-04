
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {IBitkubTicker,ILatestRates,IUsdLumiCurrentPrice,} from "../interfaces/responses";
import Navcoin from "../components/Navcoin";
import { CSSTransition } from "react-transition-group";


function Price() {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdtdk, setusdtdk] = useState<number | null>(null);
  const [usdtgold, setusdtgold] = useState<number | null>(null);
  const [thbgold, setthbgold] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbdk, setthbdk] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbLumi, setThbLumi] = useState<number | null>(null);
  const [thbUsd, setThbUsd] = useState<number | null>(null);
  const [usdKM, setusdKM] = useState<number | null>(null);
  const [thbKM, setthbKM] = useState<number | null>(null);
  const [usdKUSDC, setKUSDC] = useState<number | null>(null);
  const [thbKUSDC, setthbKUSDC] = useState<number | null>(null);
  const [usdSCP, setSCP] = useState<number | null>(null);
  const [thbSCP, setthbSCP] = useState<number | null>(null);
  
  
  

  
  const initialRates = async () => {
    const now = Math.floor(Date.now() / 1000);
    const responses = await Promise.all([
      axios.get("https://api.bitkub.com/api/market/ticker?sym=THB_KUB"),
      axios.get("https://api.bitkub.com/api/market/ticker?sym=THB_USDT"),
      axios.get<ILatestRates>("https://api.loremboard.finance/api/v1/dashboard/fiat/latest"),
      axios.get<IUsdLumiCurrentPrice>(`https://api.bkc.loremboard.finance/charts/history?symbol=LUMI&resolution=120&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KKUB&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=DK&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDT&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=GOLD&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KM&resolution=15&from=${
        now - 10000
      }&to=${now}&currencyCode=USD`
    ),
    axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDC&resolution=15&from=${
      now - 10000
    }&to=${now}&currencyCode=USD`
  ),
  axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=SCP&resolution=15&from=${
      now - 10000
    }&to=${now}&currencyCode=USD`
  ),
    ]);
    setThbKub(responses[0].data.THB_KUB.last);
    setThbUsdt(responses[1].data.THB_USDT.last);
    setThbUsd(responses[2].data.rates.THB);
    setThbLumi( responses[3].data.c[responses[3].data.c.length - 1] *responses[2].data.rates.THB);
    setusdtkkub( responses[4].data.c[responses[4].data.c.length - 1] *responses[2].data.rates.USD);
    setusdtdk( responses[5].data.c[responses[5].data.c.length - 1] *responses[2].data.rates.USD);
    setusdlumi( responses[4].data.c[responses[4].data.c.length - 1] *responses[2].data.rates.USD);
    setkusdt( responses[6].data.c[responses[6].data.c.length - 1] *responses[2].data.rates.USD);
    setusdtgold( responses[7].data.c[responses[7].data.c.length - 1] *responses[2].data.rates.USD);
    setusdKM( responses[8].data.c[responses[8].data.c.length - 1] *responses[2].data.rates.USD);
    setKUSDC( responses[9].data.c[responses[9].data.c.length - 1] *responses[2].data.rates.USD);
    setSCP( responses[10].data.c[responses[10].data.c.length - 1] *responses[2].data.rates.USD);
    setthbdk( responses[5].data.c[responses[5].data.c.length - 1] *responses[2].data.rates.THB);
    setthbgold( responses[7].data.c[responses[7].data.c.length - 1] *responses[2].data.rates.THB);
    setthbKM( responses[8].data.c[responses[8].data.c.length - 1] *responses[2].data.rates.THB);
    setthbSCP( responses[10].data.c[responses[10].data.c.length - 1] *responses[2].data.rates.THB);
    setthbKUSDC( responses[9].data.c[responses[9].data.c.length - 1] *responses[2].data.rates.THB);
    
   
    
  };

  useEffect(() => {
    initialRates();
  }, []);

  useEffect(() => {
    const wsBitkubConnection = () => {
      const BASE_API_URL_BITKUB = "wss://api.bitkub.com/websocket-api";

      const wsBitkub = new WebSocket(
        `${BASE_API_URL_BITKUB}/market.ticker.thb_kub,market.ticker.thb_usdt`
      );

      wsBitkub.onopen = () => {
        wsBitkub.onmessage = (ev) => {
          try {
            const { id, last } = JSON.parse(ev.data) as IBitkubTicker;

            switch (id) {
              case 8:
                setThbUsdt(last);
                break;

              case 92:
                setThbKub(last);
                break;
            }
          } catch (error) {
            if (error instanceof SyntaxError) {
              // Do nothing
              return;
            }

            console.log("❗️", (error as Error).name);
          }
        };
      };

      wsBitkub.onclose = () => wsBitkubConnection();
    };

    wsBitkubConnection();
  }, []);

  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>ราคาเหรียญเกม</title>
      </Head>
      <Navcoin/>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
        <div className="grid grid-cols-2 gap-4">
        <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/kub.png" alt="kub" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbKub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbKub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbKub || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/KUB</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/kub.png" alt="kub" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdtkkub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdtkkub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdtkkub || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/KUB</p>
                </div>
              </CSSTransition>
            </div>
          </div> 
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/lumi.png" alt="lumi" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbLumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbLumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {parseFloat((thbLumi || 0).toFixed(2)).toLocaleString(
                      "th-TH"
                    )}
                  </h1>
                  <p className="text-2xs opacity-60">THB/LUMI</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/lumi.png" alt="lumi" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdlumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdlumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {parseFloat((usdlumi || 0).toFixed(2)).toLocaleString(
                      "th-TH"
                    )}
                  </h1>
                  <p className="text-2xs opacity-60">USD/LUMI</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/usdt.png" alt="usdt" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbUsdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbUsdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbUsdt || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/USDT</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/usdt.png" alt="usdt" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!kusdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!kusdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(kusdt || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">KUSD/USDT</p>
                </div>
              </CSSTransition>
            </div>
          </div> 
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/dkusd.png" alt="dkusd" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbdk}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbdk}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbdk || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/DK</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/dkusd.png" alt="dkusd" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdtdk}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdtdk}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdtdk || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/DK</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          {/* <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 -m-1"
                viewBox="0 0 20 20"
                fill="gold"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbUsd}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbUsd}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {parseFloat((thbUsd || 0).toFixed(2)).toLocaleString(
                      "th-TH"
                    )}
                  </h1>
                  <p className="text-2xs opacity-60">THB/USD</p>
                </div>
              </CSSTransition>
            </div>
          </div> */}
           <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/gold.jpg" alt="gold" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbgold}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbgold}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbgold || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/GOLD</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/gold.jpg" alt="gold" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdtgold}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdtgold}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdtgold || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/GOLD</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/km.png" alt="KM" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbKM}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbKM}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbKM || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/KM</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/km.png" alt="KM" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdKM}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdKM}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdKM || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/KM</p>
                </div>
              </CSSTransition>
            </div>
          </div>
         
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/scp.png" alt="scp" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbSCP}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbSCP}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbSCP || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/SCP</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/scp.png" alt="scp" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdSCP}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdSCP}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdSCP || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/SCP</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/KUSDC.png" alt="KUSDC" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbKUSDC}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbKUSDC}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbKUSDC || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/KUSDC</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="/icons/KUSDC.png" alt="KUSDC" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdKUSDC}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdKUSDC}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdKUSDC || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/KUSDC</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          

                  </div>
                    </div>
                      </div>
            
     
 
  );
};
export default Price;
