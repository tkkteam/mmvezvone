import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {
  IBitkubTicker,
  ILatestRates,
  IUsdLumiCurrentPrice,
} from "../interfaces/responses";
import Link from "next/link";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { CSSTransition } from "react-transition-group";

type PlantKind = "SEED" | "STEM" | "LUMI";
type StemLP = "LKKUB" | "LKUSDT";
type SeedKind = "TOMATO" | "CORN" | "CABBAGE" | "CARROT" | "COFFEE" | "FISHFOOD" ;
type RewardMultiplier = 4 | 5 | 9 | 12 | 20 | 24;

const Home: NextPage = () => {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdtdk, setusdtdk] = useState<number | null>(null);
  const [usdtgold, setusdtgold] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbbtc, setThbbtc] = useState<number | null>(null);
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
      axios.get("https://api.bitkub.com/api/market/ticker?sym=THB_BTC"),
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
    ]);
    setThbbtc(responses[0].data.THB_BTC.last);
    setThbKub(responses[1].data.THB_KUB.last);
    setThbUsdt(responses[2].data.THB_USDT.last);
    setThbUsd(responses[3].data.rates.THB);
    setThbLumi( responses[4].data.c[responses[4].data.c.length - 1] *responses[3].data.rates.THB);
    setusdtkkub( responses[5].data.c[responses[5].data.c.length - 1] *responses[3].data.rates.USD);
    setusdtdk( responses[6].data.c[responses[6].data.c.length - 1] *responses[3].data.rates.USD);
    setusdlumi( responses[4].data.c[responses[4].data.c.length - 1] *responses[3].data.rates.USD);
    setkusdt( responses[7].data.c[responses[4].data.c.length - 1] *responses[3].data.rates.USD);
    setusdtgold( responses[8].data.c[responses[4].data.c.length - 1] *responses[3].data.rates.USD);
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

              case 1:
                setThbbtc(last);
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
      <div className="inline-flex flex items-center justify-center rounded-md" role="group">
      <div className= "p-2 text-2xl  flex items-center justify-center">
  <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          <Link href="/Guide">
            <h3 className="text-1xl font-bold">แนะนำการเล่นเกม</h3>
          </Link>
  </button>
  <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
  <Link href="/map">
            <h3 className="text-1xl font-bold">แผนที่เกม</h3>
          </Link>
  </button>
  <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
  <Link href="/develop">
            <h3 className="text-1xl font-bold">ประกาศอัปเดต</h3>
          </Link>
  </button>
</div>
</div>
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
      

        <div className="grid  grid-cols-2 gap-4 ">
        
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
              <Image src="/icons/btc.png" alt="btc" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbbtc}
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
                in={!!thbbtc}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbbtc || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/BTC</p>
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
                  <p className="text-2xs opacity-60">KUSD/USD</p>
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
          </div>
        </div>
		        <div className="flex-1 p-5 text-2xl  flex items-center justify-center text-center">
            <Link href="https://www.facebook.com/commutoken/">
            <a target="_blank">
            <img className="max-w-full h-auto rounded-lg" src="https://i.ibb.co/YBJWCMz/Banner1.png" />
            </a>
          </Link>
        </div>
          <div className="p-2 pl-5 pr-5  text-gray-100 text-lg rounded-lg focus:border-4  text-center">
          <Link href="https://www.p2pcontract.finance/">
            <a target="_blank">
            <h3 className="text-1xl font-bold text-indigo-500 animate-bounce">เว็บแลกเปลี่ยนผลผลิต p2pcontract</h3>
            </a>
          </Link>
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
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">คำนวณผลผลิตต่อวัน</h1>
          <div className="btn-group self-center">
            <button
              className={`btn${plantKind === "SEED" ? " bg-blue-400 hover:bg-blue-500 text-white font-bold py 1 px-4 border-b-4 border-blue-500 hover:border-blue-200 rounded" : ""}`}
              onClick={() => {
                setPlantKind("SEED");
                switch (seedKind) {
                  case "TOMATO":
                    setRewardMultiplier(5);
                    break;
                  case "CORN":
                    setRewardMultiplier(5);
                    break;
                  case "CABBAGE":
                    setRewardMultiplier(5);
                    break;
                  case "CARROT":
                    setRewardMultiplier(9);
                    break;
                  case "COFFEE":
                    setRewardMultiplier(4);
                    break;
                    case "FISHFOOD":
                    setRewardMultiplier(12);
                    break;
                }
              }}
            >
              SEED
            </button>
            <button
              className={`btn${plantKind === "LUMI" ? " bg-blue-400 hover:bg-blue-500 text-white font-bold py 1 px-4 border-b-4 border-blue-500 hover:border-blue-200 rounded" : ""}`}
              onClick={() => {
                setPlantKind("LUMI");
                setRewardMultiplier(4);
              }}
            >
              LUMI
            </button>
          </div>

          {plantKind === "STEM" && (
            <div className="btn-group self-center">
              <button
                className={`btn btn-sm${
                  stemLP === "LKKUB" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setStemLP("LKKUB");
                  switch (seedKind) {
                    case "TOMATO":
                      setRewardMultiplier(24);
                      break;
                    case "CORN":
                      setRewardMultiplier(24);
                      break;
                    case "CABBAGE":
                      setRewardMultiplier(24);
                      break;
                    case "CARROT":
                      setRewardMultiplier(24);
                      break;
                    case "COFFEE":
                      setRewardMultiplier(24);
                      break;
                    case "FISHFOOD":
                      setRewardMultiplier(24);
                      break;
                  }
                }}
              >
                LKKUB
              </button>

              <button
                className={`btn btn-sm${
                  stemLP === "LKUSDT" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setStemLP("LKUSDT");
                  switch (seedKind) {
                    case "TOMATO":
                      setRewardMultiplier(20);
                      break;
                    case "CORN":
                      setRewardMultiplier(20);
                      break;
                    case "CABBAGE":
                      setRewardMultiplier(20);
                      break;
                    case "CARROT":
                      setRewardMultiplier(20);
                      break;
                    case "COFFEE":
                      setRewardMultiplier(20);
                      break;
                      case "FISHFOOD":
                        setRewardMultiplier(20);
                        break;
                  }
                }}
              >
                LKUSDT
              </button>
            </div>
          )}

          <div className="ring ring-accent self-center w-10 h-10 rounded-full">
            <Image
              src={
                plantKind === "LUMI"
                  ? "/icons/lumi.png"
                  : `/icons/seed_${seedKind.toLocaleLowerCase()}.png`
              }
              alt="plant_kind"
              width={80}
              height={80}
            />
          </div>

          {plantKind !== "LUMI" && (
            <div className="
             relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 self-center">
              <button
                className={`text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "TOMATO" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("TOMATO");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(5);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                TOMATO
              </button>

              <button
                className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "CORN" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CORN");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(5);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                CORN
              </button>

              <button
                className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "CABBAGE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CABBAGE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(5);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                CABBAGE
              </button>

              <button
                className={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "CARROT" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CARROT");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(9);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                CARROT
              </button>
              <button
                className={`text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "COFFEE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("COFFEE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(4);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                COFFEE
              </button>
              <button
                className={`text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-2xs px-4 py-1 text-center mr-2 mb-2${
                  seedKind === "FISHFOOD" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("FISHFOOD");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(12);
                      break;
                    case "STEM":
                      switch (stemLP) {
                        case "LKKUB":
                          setRewardMultiplier(24);
                          break;
                        case "LKUSDT":
                          setRewardMultiplier(20);
                          break;
                      }
                      break;
                  }
                }}
              >
                FISHFOOD
              </button>
            </div>
          )}

          <div className="btn-group self-center">
            <button
              className={`btn btn-xs${
                rewardMultiplier === 4 ? " !btn-accent" : ""
              }`}
              disabled
            >
              4X
            </button>

            <button
              className={`btn btn-xs${
                rewardMultiplier === 5 ? " !btn-accent" : ""
              }`}
              disabled
            >
              5X
            </button>

            <button
              className={`btn btn-xs${
                rewardMultiplier === 9 ? " !btn-accent" : ""
              }`}
              disabled
            >
              9X
            </button>
            
            <button
              className={`btn btn-xs${
                rewardMultiplier === 12 ? " !btn-accent" : ""
              }`}
              disabled
            >
              12X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 20 ? " !btn-accent" : ""
              }`}
              disabled
            >
              20X
            </button>

            <button
              className={`btn btn-xs${
                rewardMultiplier === 24 ? " !btn-accent" : ""
              }`}
              disabled
            >
              24X
            </button>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                จำนวน {plantKind} ที่จะ
                {plantKind === "LUMI" ? " stake" : "ปลูก"}
              </span>
            </label>
            <label className="input-group input-group-sm">
              <input
                className="input input-bordered input-sm w-full"
                type="number"
                placeholder="0.00"
                value={typeof plantAmount === "number" ? plantAmount : ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  setPlantAmount(isNaN(value) || value < 0 ? null : value);
                }}
              />
              <span>{plantKind}</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Liquidity</span>
              <div
                data-tip="คลิกที่แปลงผักที่จะปลูกในเกม"
                className="label-text-alt tooltip tooltip-left"
              >
                อยู่ตรงไหน?
              </div>
            </label>
            <label className="input-group input-group-sm">
              <input
                className="input input-bordered input-sm w-full"
                type="number"
                placeholder={
                  plantKind === "SEED"
                    ? seedKind === "TOMATO"
                      ? (totalLiquidities[0] &&
                          parseFloat(
                            totalLiquidities[0].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CORN"
                      ? (totalLiquidities[1] &&
                          parseFloat(
                            totalLiquidities[1].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CABBAGE"
                      ? (totalLiquidities[2] &&
                          parseFloat(
                            totalLiquidities[2].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CARROT"
                      ? (totalLiquidities[3] &&
                          parseFloat(
                            totalLiquidities[3].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                          
                        "-"
                      : seedKind === "COFFEE"
                      ? (totalLiquidities[4] &&
                          parseFloat(
                            totalLiquidities[4].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                          "-"
                          : seedKind === "FISHFOOD"
                          ? (totalLiquidities[5] &&
                              parseFloat(
                                totalLiquidities[5].totalLiquidity.toFixed(2)
                              ).toLocaleString("th-TH")) ||
                              
                        "-"
                      : "-"
                    : plantKind === "LUMI"
                    ? (totalLiquidities[6] &&
                        parseFloat(
                          totalLiquidities[6].totalLiquidity.toFixed(2)
                        ).toLocaleString("th-TH")) ||
                    "-"
                    : plantKind === "STEM"
                    ? (totalLiquidities[7] &&
                        parseFloat(
                          totalLiquidities[7].totalLiquidity.toFixed(2)
                        ).toLocaleString("th-TH")) ||
                      "-"
                    : "-"
                }
                value={typeof totalLiquidity === "number" ? totalLiquidity : ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  setTotalLiquidity(isNaN(value) || value < 0 ? null : value);
                }}
              />
              <span>
                {plantKind === "SEED"
                  ? "SEEDS"
                  : plantKind === "STEM"
                  ? "$"
                  : plantKind === "LUMI"
                  ? "LUMI"
                  : ""}
              </span>
            </label>
          </div>

          <div className="grid grid-cols-2">
            <div className="stat p-2 border-none">
              <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                <div className="flex items-center justify-center opacity-50">
                  Produce Rate
                </div>
                <div className="ring-[1.5px] ring-accent self-center w-4 h-4 rounded-full">
                  <Image
                    src={
                      plantKind === "LUMI"
                        ? "/icons/cowmilk.png"
                        : `/icons/crop_${seedKind.toLowerCase()}.png`
                    }
                    alt={"plant_kind"}
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="stat-value text-lg">
                {`${
                  plantKind === "STEM" && typeof yieldPerDay === "number"
                    ? "≈ "
                    : ""
                }${yieldPerDay.toLocaleString("th-TH")}`}
              </div>
              <div className="stat-title text-xs">
                {plantKind === "LUMI" ? "Milk" : "Crops"}/Day
              </div>
            </div>

            {plantKind === "SEED" && (
              <div className="stat p-2 border-none">
                <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                  <div className="flex items-center justify-center opacity-50">
                    48 hours earn
                  </div>
                  <div className="ring-[1.5px] ring-accent self-center w-4 h-4 rounded-full">
                    <Image
                      src={`/icons/crop_${seedKind.toLowerCase()}.png`}
                      alt="plant_kind"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="stat-value text-lg">
                  {typeof yieldPerDay === "number"
                    ? `≈ ${(yieldPerDay * 2).toLocaleString("th-TH")}`
                    : "-"}
                </div>
                <div className="stat-title text-xs">Crops</div>
              </div>
            )}

            <div className="stat p-2 border-none">
              <div className="stat-title flex items-center gap-1 text-xs opacity-100">
                <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                  <div className="flex items-center justify-center opacity-50">
                    Sell to KYLE
                  </div>
                  <div className="ring-[1.5px] ring-accent self-center w-4 h-4 rounded-full">
                    <Image
                      src="/icons/lumi.png"
                      alt="lumi"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </div>
              <div className="stat-value text-lg">
                {typeof yieldPerDay === "number"
                  ? `≈ ${(
                      yieldPerDay *
                      (plantKind === "STEM" ? 1 : 2) *
                      0.095
                    ).toLocaleString("th-TH")}`
                  : "-"}
              </div>
              <div className="stat-title text-xs">
                {`LUMI${plantKind === "STEM" ? "/Day" : ""}`}
              </div>
            </div>

            <div className="stat p-2 border-none">
              <div className="stat-title text-xs">Estimated</div>
              <div className="stat-value text-lg">
                {typeof yieldPerDay === "number"
                  ? `≈ ${parseFloat(
                      (
                        yieldPerDay *
                        (plantKind === "STEM" ? 1 : 2) *
                        0.095 *
                        (thbLumi || 0)
                      ).toFixed(2)
                    ).toLocaleString("th-TH")}`
                  : "-"}
              </div>
              <div className="stat-title text-xs">
                THB{plantKind === "STEM" ? "/Day" : ""}
              </div>
            </div>
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