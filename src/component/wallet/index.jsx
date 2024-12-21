import React from 'react'
import { WalletMultiButton, WalletDisconnectButton } from "../Buttons/index.jsx";
import Airdrop from '../../Airdrop.jsx';
import { ShowSolBalance } from '../../Balance/index.jsx';
import { SignMessage } from '../SignMessage/index.jsx';


function WalletButtons() {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen">


            <img
                src="https://faucet.solana.com/_next/static/media/solanaLogo.74d35f7a.svg"
                alt="Solana Logo"
                class="w-[800px] h-[70px] mb-9"
            />



            <div class="w-full max-w-[600px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#131212] dark:border-gray-700">
                <h1 class="text-3xl font-semibold">Request Airdrop</h1>
                <p class="mb-4">Maximum of 2 requests per hour</p>

                <Airdrop />
            </div>


            <div class="mt-4">
                <WalletMultiButton />
                <WalletDisconnectButton />
                {/* <Airdrop />
                <ShowSolBalance />
                <SignMessage /> */}
            </div>

        </div>

    )
}

export default WalletButtons;