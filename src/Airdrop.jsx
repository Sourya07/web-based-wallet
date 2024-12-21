import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useState } from 'react';

export function Airdrop() {
    const [airdrop, setAirdrop] = useState(0);
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdrop() {
        if (!wallet.publicKey) {
            console.error("Wallet not connected!");
            return;
        }

        try {
            const lamports = airdrop * LAMPORTS_PER_SOL;
            console.log("Requesting airdrop of", lamports, "lamports");

            const signature = await connection.requestAirdrop(
                wallet.publicKey,
                lamports
            );

            console.log("Airdrop successful, transaction signature:", signature);
        } catch (error) {
            console.error("Airdrop failed:", error.message);
        }
    }

    return (
        <div>

            <h2 className='mb-3 font-bold'>Airdrop SOL</h2>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"

                value={wallet.publicKey ? wallet.publicKey.toString() : ""}
                placeholder="No wallet connected"
            />

            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"

                type="number"
                placeholder="Amount in SOL"
                onChange={(e) => setAirdrop(Number(e.target.value))}
            />


            <button
                onClick={sendAirdrop} disabled={!wallet.publicKey || airdrop <= 0}
                type="button"
                class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
            >
                <svg
                    class="w-4 h-4 me-2 -ms-1 text-[#626890]"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                >
                    <linearGradient id="solana-gradient" x1="10%" y1="10%" x2="90%" y2="90%">
                        <stop offset="0%" stop-color="#9945FF" />
                        <stop offset="50%" stop-color="#14F195" />
                        <stop offset="100%" stop-color="#00FFA3" />
                    </linearGradient>
                    <path
                        fill="url(#solana-gradient)"
                        d="M95.6 220.5c5.1-5.1 11.8-7.7 19.5-7.7h264.5c7.6 0 11.4 9.2 6 14.6l-44.9 44.8c-5.1 5.1-11.8 7.7-19.5 7.7H56.6c-7.6 0-11.4-9.2-6-14.6l44.9-44.8Zm0-147.6C100.7 67.8 107.4 65.2 115 65.2h264.5c7.6 0 11.4 9.2 6 14.6L340.6 124.6c-5.1 5.1-11.8 7.7-19.5 7.7H56.6c-7.6 0-11.4-9.2-6-14.6l44.9-44.8Zm264.5 89.5c7.6 0 11.4 9.2 6 14.6l-44.9 44.8c-5.1 5.1-11.8 7.7-19.5 7.7H56.6c-7.6 0-11.4-9.2-6-14.6l44.9-44.8c5.1-5.1 11.8-7.7 19.5-7.7h264.5Z"
                    />
                </svg>
                Pay with Solana
            </button>

        </div>
    );
}

export default Airdrop;
