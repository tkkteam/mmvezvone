import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import {
  IBitkubTicker,
  ILatestRates,
  IUsdLumiCurrentPrice,
} from "../interfaces/responses";
import Link from "next/link";
import useSWR from "swr";
import Navbar from "../components/Navbar";

type PlantKind = "SEED" | "STEM" | "LUMI";
type StemLP = "LKKUB" | "LKUSDT";
type SeedKind = "TOMATO" | "CORN" | "CABBAGE" | "CARROT" | "COFFEE" | "FISHFOOD" ;
type RewardMultiplier = 4 | 5 | 9 | 12 | 20 | 24;

const Home: NextPage = () => {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbLumi, setThbLumi] = useState<number | null>(null);
  const [thbUsd, setThbUsd] = useState<number | null>(null);
  const [plantKind, setPlantKind] = useState<PlantKind>("SEED");
  const [stemLP, setStemLP] = useState<StemLP>("LKKUB");
  const [stemLkusdtCompose, setStemLkusdtCompose] = useState<{
    lumi: number;
    kusdt: number;
  }>();
  const [stemLkusdtPrice, setStemLkusdtPrice] = useState<number>();
  const [stemLkkubCompose, setStemLkkubCompose] = useState<{
    lumi: number;
    kkub: number;
  }>();
  const [stemLkkubPrice, setStemLkkubPrice] = useState<number>();
  const [seedKind, setSeedKind] = useState<SeedKind>("TOMATO");
  const [rewardMultiplier, setRewardMultiplier] = useState<RewardMultiplier>(5);
  const [plantAmount, setPlantAmount] = useState<number | null>(null);
  const [totalLiquidity, setTotalLiquidity] = useState<number | null>(null);
  const [totalLiquidities, setTotalLiquidities] = useState<
  {
      name: string;
      totalLiquidity: number;
    }[]
  >([]);
  const [yieldPerDay, setYieldPerDay] = useState<number | "-">("-");
  
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
     
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDT&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
  
    ]);
    setThbKub(responses[0].data.THB_KUB.last);
    setThbUsdt(responses[1].data.THB_USDT.last);
    setThbUsd(responses[2].data.rates.THB);
    setThbLumi( responses[3].data.c[responses[3].data.c.length - 1] *responses[2].data.rates.THB);
    setusdtkkub( responses[4].data.c[responses[4].data.c.length - 1] *responses[2].data.rates.USD);
    setusdlumi( responses[3].data.c[responses[3].data.c.length - 1] *responses[2].data.rates.USD);
    setkusdt( responses[5].data.c[responses[5].data.c.length - 1] *responses[2].data.rates.USD);
  };

  useEffect(() => {
    initialRates();
  }, []);

  useSWR(
    "stemLkusdtPrice",
    async () => {
      const response = await axios.post<{
        error: { code: number; message: string };
        result: string;
      }>("https://bitkub-chain-rpc.morningmoonvillage.com", {
        jsonrpc: "2.0",
        id: Date.now(),
        method: "eth_call",
        params: [
          {
            data: "0x252dba420000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000006e9e62018a013b20bcb7c573690fd1425ddd6b26000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a4d06ca61f00000000000000000000000000000000000000000000000011b18a8faacd4b4f0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa3610000000000000000000000007d984c24d2499d840eb3b7016077164e15e5faa600000000000000000000000000000000000000000000000000000000",
            to: "0xb2dd98bd8a916a9fef1ce0e35302a53ae23fd260",
          },
          "latest",
        ],
      });

      const lumi =
        parseInt(
          (
            response.data.result.replace("0x", "").match(/.{64}/g) as string[]
          )[7],
          16
        ) / Math.pow(10, 18);

      const kusdt =
        parseInt(
          (
            response.data.result.replace("0x", "").match(/.{64}/g) as string[]
          )[8],
          16
        ) / Math.pow(10, 18);

      setStemLkusdtCompose({ lumi, kusdt });
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );

  useSWR(
    "stemLkkubPrice",
    async () => {
      const response = await axios.post<{
        error: { code: number; message: string };
        result: string;
      }>("https://bitkub-chain-rpc.morningmoonvillage.com", {
        jsonrpc: "2.0",
        id: Date.now(),
        method: "eth_call",
        params: [
          {
            data: "0x252dba420000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000006e9e62018a013b20bcb7c573690fd1425ddd6b26000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a4d06ca61f00000000000000000000000000000000000000000000000032a3b4df72f80e540000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa36100000000000000000000000067ebd850304c70d983b2d1b93ea79c7cd6c3f6b500000000000000000000000000000000000000000000000000000000",
            to: "0xb2dd98bd8a916a9fef1ce0e35302a53ae23fd260",
          },
          "latest",
        ],
      });

      const lumi =
        parseInt(
          (
            response.data.result.replace("0x", "").match(/.{64}/g) as string[]
          )[7],
          16
        ) / Math.pow(10, 18);

      const kkub =
        parseInt(
          (
            response.data.result.replace("0x", "").match(/.{64}/g) as string[]
          )[8],
          16
        ) / Math.pow(10, 18);

      setStemLkkubCompose({ lumi, kkub });
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );
  
  useSWR(
    "https://api.loremboard.finance/api/v1/dashboard/fiat/latest",
    async (apiPath) => {
      const latestRatesResponse = await axios.get<ILatestRates>(apiPath);
      setThbUsd(latestRatesResponse.data.rates.THB);
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );
  
  useSWR(
    "lumiUsdCurrentPrice",
    async () => {
      const now = Math.floor(Date.now() / 1000);

      const usdLumiCurrentPriceResponse = await axios.get<IUsdLumiCurrentPrice>(
        `https://api.bkc.loremboard.finance/charts/history?symbol=LUMI&resolution=120&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      );

      setThbLumi(
        (thbUsd || 0) *
          usdLumiCurrentPriceResponse.data.c[
            usdLumiCurrentPriceResponse.data.c.length - 1
          ]
      );
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );
  
  useSWR(
    "totalLiquidities",
    async () => {
      const tokens = [
        {
          name: "seedFarmTomato",
          address: "ec85f017ea248c169c5ae32a782e380e0db3b10d",
        },
        {
          name: "seedFarmCorn",
          address: "eef084a9e4efb5436ed7115f271dd1f47789b81b",
        },
        {
          name: "seedFarmCabage",
          address: "e0c8e0d1e281deb31a305369b5527f45898e2fd8",
        },
        {
          name: "seedFarmCarrot",
          address: "b92cd3ab59d8fbb1156f07f9bc0deacc9bc4954d",
        },
        {
          name: "seedFarmCoffee",
          address: "91e6512a01ddfbe0027f191832cd9cc877d84f15",
        },
        {
          name: "seedFarmFishfood",
          address: "2ca957c560151148aa4ab677f4171e265e76806e",
        },
        {
          name: "lumiCowMilkFarm",
          address: "d8356f78379afca40d2a966beb95e9c27ebc2915",
        },
      ];

      const totalLiquiditiesResponse = await Promise.all(
        tokens.map((token) => {
          return axios.post<{
            error: { code: number; message: string };
            result: string;
          }>("https://bitkub-chain-rpc.morningmoonvillage.com", {
            jsonrpc: "2.0",
            id: Date.now(),
            method: "eth_call",
            params: [
              {
                data:
                token.name === "lumiCowMilkFarm"
                ? "0x252dba42000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000449df8d3300000000000000000000000000000000000000000000000000000000000000000000000000000000d8356f78379afca40d2a966beb95e9c27ebc2915000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000241959a00200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa3610000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002470a08231000000000000000000000000d8356f78379afca40d2a966beb95e9c27ebc291500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000024f40f0f52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                    : `0x252dba420000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000000000000000420000000000000000000000000${token.address}0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000449df8d3300000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004921979af000000000000000000000000000000000000000000000000000000000000000000000000000000006e9e62018a013b20bcb7c573690fd1425ddd6b26000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a4d06ca61f0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa3610000000000000000000000007d984c24d2499d840eb3b7016077164e15e5faa600000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000241959a002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000024f40f0f52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ec85f017ea248c169c5ae32a782e380e0db3b10d000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000042705e86500000000000000000000000000000000000000000000000000000000`,
                to: "0xb2dd98bd8a916a9fef1ce0e35302a53ae23fd260",
              },
              "latest",
            ],
          });
        })
      );

      const totalLiquidities = totalLiquiditiesResponse.map(
        (totalLiquidityResponse, index) => {
          return {
            name: tokens[index].name,
            totalLiquidity:
              parseInt(
                (
                  totalLiquidityResponse.data.result
                    .replace("0x", "")
                    .match(/.{64}/g) as string[]
                )[12],
                16
              ) / Math.pow(10, 18),
          };
        }
      );

      setTotalLiquidities([...totalLiquidities]);
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    const wsBitkubConnection = () => {
      const BASE_API_URL_BITKUB = "wss://api.bitkub.com/websocket-api";

      const wsBitkub = new WebSocket(
        `${BASE_API_URL_BITKUB}/market.ticker.thb_kub,market.ticker.thb_usdt,market.ticker.thb_btc`
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

  useEffect(() => {
    if (
      stemLkusdtCompose?.kusdt &&
      stemLkusdtCompose?.lumi &&
      thbLumi &&
      thbUsdt
    ) {
      setStemLkusdtPrice(
        (stemLkusdtCompose.lumi * thbLumi + stemLkusdtCompose.kusdt * thbUsdt) /
          thbUsdt
      );
    }

    if (stemLkkubCompose?.lumi && thbLumi && stemLkkubCompose?.kkub && thbKub) {
      setStemLkkubPrice(
        (stemLkkubCompose.lumi * thbLumi + stemLkkubCompose.kkub * thbKub) /
          thbKub
      );
    }
  }, [
    stemLkkubCompose?.kkub,
    stemLkkubCompose?.lumi,
    stemLkusdtCompose?.kusdt,
    stemLkusdtCompose?.lumi,
    thbKub,
    thbLumi,
    thbUsdt,
  ]);

  useEffect(() => {
    switch (plantKind) {
      case "SEED":
        const rewardsSeedPercentage =
          (plantAmount || 0) /
          ((typeof totalLiquidity === "number" && totalLiquidity >= 0
            ? totalLiquidity
            : seedKind === "TOMATO"
            ? totalLiquidities[0]?.totalLiquidity
            : seedKind === "CORN"
            ? totalLiquidities[1]?.totalLiquidity
            : seedKind === "CABBAGE"
            ? totalLiquidities[2]?.totalLiquidity
            : seedKind === "CARROT"
            ? totalLiquidities[3]?.totalLiquidity
            : seedKind === "COFFEE"
            ? totalLiquidities[4]?.totalLiquidity
            : seedKind === "FISHFOOD"
            ? totalLiquidities[5]?.totalLiquidity
            : Infinity) +
            (plantAmount || 0));

        const yieldPerDaySeed = parseFloat(
          (17280 * 0.1 * rewardMultiplier * rewardsSeedPercentage).toFixed(2)
        );

        setYieldPerDay(
          yieldPerDaySeed <= 0 ||
            yieldPerDaySeed === Infinity ||
            isNaN(yieldPerDaySeed)
            ? "-"
            : yieldPerDaySeed
        );
        break;

      case "STEM":
        switch (stemLP) {
          case "LKKUB":
            const stemLkKubAmountToUsd =
              ((plantAmount || 0) * (stemLkkubPrice || 0) * (thbKub || 0)) /
              (thbUsd || 0);
            const rewardsLkkubPercentage =
              stemLkKubAmountToUsd /
              ((typeof totalLiquidity === "number" && totalLiquidity >= 0 ? totalLiquidity : Infinity) +
                stemLkKubAmountToUsd);

            const yieldPerDayStemLkKub = parseFloat(
              (40683 * 0.1 * rewardMultiplier * rewardsLkkubPercentage).toFixed(2));

            setYieldPerDay(
              yieldPerDayStemLkKub <= 0 ||
                yieldPerDayStemLkKub === Infinity ||
                isNaN(yieldPerDayStemLkKub)
                ? "-"
                : yieldPerDayStemLkKub
            );
            break;
          
          case "LKUSDT":
            const stemLkUsdtAmountToUsd =
              ((plantAmount || 0) * (stemLkusdtPrice || 0) * (thbUsdt || 0)) /
              (thbUsd || 0);
            const rewardsLkUsdtPercentage =
             stemLkUsdtAmountToUsd /
             ((typeof totalLiquidity === "number" && totalLiquidity >= 0 ? totalLiquidity : Infinity) +
                stemLkUsdtAmountToUsd);

            const yieldPerDayStemLkUsdt = parseFloat(
              (
                34560 *
                0.1156 *
                rewardMultiplier *
                rewardsLkUsdtPercentage
              ).toFixed(2)
            );

            setYieldPerDay(
              yieldPerDayStemLkUsdt <= 0 ||
                yieldPerDayStemLkUsdt === Infinity ||
                isNaN(yieldPerDayStemLkUsdt)
                ? "-"
                : yieldPerDayStemLkUsdt
            );
            break;
        }

        break;

      case "LUMI":
        const rewardsLumiPercentage =
          (plantAmount || 0) /
          ((typeof totalLiquidity === "number" && totalLiquidity >= 0
            ? totalLiquidity
            : totalLiquidities[6]?.totalLiquidity) +
            (plantAmount || 0));

        const yieldPerDayLumi = parseFloat(
          (17280 * 0.1 * rewardMultiplier * rewardsLumiPercentage).toFixed(2)
        );

        setYieldPerDay(
          yieldPerDayLumi <= 0 ||
            yieldPerDayLumi === Infinity ||
            isNaN(yieldPerDayLumi)
            ? "-"
            : yieldPerDayLumi
        );
        break;
    }
  }, [
    plantKind,
    rewardMultiplier,
    seedKind,
    plantAmount,
    stemLP,
    stemLkkubPrice,
    stemLkusdtPrice,
    thbKub,
    thbUsd,
    thbUsdt,
    totalLiquidities,
    totalLiquidity,
  ]);

       
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>MorningmoonVillage Calculator</title>
      </Head>   
      
      <Navbar />
      <div>
      <div className="text-green-500">
      <Marquee
        speed={70} // Speed of the marquee (Optional)
        style={{
          height: 40 // Your own styling (Optional)
        }}
      >
        
        <p>เซิร์ฟเวอร์เปิดให้บริการตามปกติ หากทางผู้เล่นพบปัญหาในการเล่นเกม สามารถแจ้งปัญหาหรือติดต่อได้ที่ Facbook:<Link href="https://www.facebook.com/MorningMoonVillageOfficial">
            <a target="_blank">
           MorningMoonVillageOfficial
            </a>    
          </Link>
        </p>   
      </Marquee>
      </div>
  </div> 

<div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
<div className="grid grid-cols-2 gap-4 mx-auto">
        <Link href="/price"> 
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">ราคาเหรียญ</span>
            </button>
        </Link>
        <Link href="/calculator">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">คำนวณผลผลิต</span>
            </button>
        </Link>
        <Link href="/Guide">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">แนะนำการเล่น</span>
            </button>
        </Link>
    
        <Link href="https://mmvplus.vercel.app/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">MMV สลากพลัส</span>
            </button>
            </a>
        </Link>

        <Link href="https://www.cmhexa.com/lookdo/">
            <a target="_blank">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">เช็คจำนวน Token</span>
            </button>
            </a>
        </Link>       
        </div>  
        <div className="text-center">
        <iframe src="https://www.youtube.com/embed/vwyCEJmu3Iw?autoplay=1&mute=1" 
         width="600" 
         height="350" 
         frameBorder="0" 
         allowFullScreen 
         allow="autoplay; encrypted-media"></iframe>
        </div> 
        <div className="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300 text-center">
        <p>ช่อง Youtube ที่สอนเทคนิคการเล่นเกม Morningmoon Village</p>
        </div> 
        <div className="container grid grid-cols-3 gap-2 mx-auto">
        <div className="w-full rounded hover:opacity-50">
        <Link href="https://www.youtube.com/channel/UC6h8YpdgLs4YN8yHW4fYOPg">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/ZYwDGjT/Pondkub.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/channel/UC75j9pHrdLinOMcfLjUXQIg">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/j35vh3V/278910218-115917581077317-6456500243265992292-n.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/channel/UCxXyGeUUE8iYLbX5krjhHzA">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/80K5vWM/273485701-117076550882644-8357820669049442954-n.jpg" />       
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/c/CryptoRockBand">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/41WSCpX/Crypto-Rock.jpg" />
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/user/Huanathapong">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/g6cF7Zg/hua.jpg" />       
            </a>
          </Link>
    </div>
    <div className="w-full rounded hover:opacity-50">
    <Link href="https://www.youtube.com/c/CHAINZ888">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/DRhjX3M/chainz888.jpg" />       
            </a>
          </Link>
    </div>
    </div>
      </div>
      <footer className="footer bg-neutral text-neutral-content items-center gap-4 p-4">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved Powerby TATUM-IT</p><p>Credit artzeeker</p>
        </div>
        <div className="md:place-self-center md:justify-self-end grid-flow-col gap-4">
          <Link href="https://www.facebook.com/tatummaster">
            <a target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://www.youtube.com/watch?v=QFn2MdESHJo&t=3s&ab_channel=TATUMOFFICIAL">
            <a target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </footer>
        </div>
  );
};
export default Home;