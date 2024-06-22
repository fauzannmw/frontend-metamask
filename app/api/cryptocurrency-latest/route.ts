import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: "1",
          limit: "5",
          convert: "USD",
        },
      }
    );

    const priceData = response.data.data.map((crypto: any) => ({
      symbol: crypto.symbol,
      price: crypto.quote.USD.price,
    }));

    return NextResponse.json(priceData);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap", error);
    return NextResponse.json(
      { error: "Error fetching data from CoinMarketCap" },
      { status: 500 }
    );
  }
}
