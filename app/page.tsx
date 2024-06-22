import CryptoPrices from "@/components/crypto-price";
import CryptoWallet from "@/components/crypto-wallet";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <CryptoWallet />
      <CryptoPrices />
    </div>
  );
}
