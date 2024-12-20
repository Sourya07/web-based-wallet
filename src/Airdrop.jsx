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
            <h2>Airdrop SOL</h2>
            <p>{wallet.publicKey ? `Wallet: ${wallet.publicKey.toString()}` : "No wallet connected"}</p>

            <input
                type="number"
                placeholder="Amount in SOL"
                onChange={(e) => setAirdrop(Number(e.target.value))}
            />
            <button onClick={sendAirdrop} disabled={!wallet.publicKey || airdrop <= 0}>
                Airdrop
            </button>
        </div>
    );
}

export default Airdrop;
