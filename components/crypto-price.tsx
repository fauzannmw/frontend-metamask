"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface PriceData {
  symbol: string;
  price: number;
  percentage: number;
}

const imageMap: Record<string, string> = {
  BTC: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
  ETH: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png",
  USDT: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png",
  BNB: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png",
  SOL: "https://s2.coinmarketcap.com/static/img/coins/32x32/5426.png",
};

const CryptoPrices: React.FC = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get("/api/cryptocurrency-latest");
        setPrices(
          response.data.map((data: any) => ({
            symbol: data.symbol,
            price: data.price,
            percentage: data.percentage,
          }))
        );
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Prices</h1>
      {prices.map((crypto) => (
        <div
          key={crypto.symbol}
          className="flex items-center bg-white rounded-lg shadow px-4 py-2"
        >
          <Image
            src={imageMap[crypto.symbol] || "/icons/default.png"}
            alt={crypto.symbol}
            width={32}
            height={32}
            className="mr-4"
          />
          <div>
            <p className="text-sm font-semibold">{crypto.symbol} (BTC)</p>
            <p className="text-lg font-bold">${crypto.price.toFixed(2)} USD</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoPrices;
