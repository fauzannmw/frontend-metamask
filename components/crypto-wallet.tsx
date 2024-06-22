"use client";
import { useState } from "react";
import { ethers } from "ethers";

const CryptoWallet: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();
        setAddress(walletAddress);
        const balance = await provider.getBalance(walletAddress);
        const formattedBalance = ethers.formatEther(balance);
        setBalance(formattedBalance);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please install Metamask!");
    }
  };

  const disconnectWallet = () => {
    setAddress("");
    setBalance("");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Crypto Wallet</h1>
      {address ? (
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">Connected Wallet:</p>
          <p className="text-md mb-4">{address}</p>
          <p className="text-lg font-semibold">Balance:</p>
          <p className="text-md mb-4">{balance} ETH</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={disconnectWallet}
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default CryptoWallet;
