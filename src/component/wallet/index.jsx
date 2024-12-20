import React from 'react'
import { WalletMultiButton, WalletDisconnectButton } from "../Buttons/index.jsx";
import Airdrop from '../../Airdrop.jsx';
import { ShowSolBalance } from '../../Balance/index.jsx';
import { SignMessage } from '../SignMessage/index.jsx';


function WalletButtons() {
    return (
        <div>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <Airdrop />
            <ShowSolBalance />
            <SignMessage />
        </div>
    )
}

export default WalletButtons;