import React from 'react';
import './styles.css'; // Ensure this is correctly imported

import {
    WalletMultiButton as DefaultWalletMultiButton,
    WalletDisconnectButton as DefaultWalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';

const WalletMultiButton = () => {
    return (
        <DefaultWalletMultiButton className="wallet-adapter-button" />
    );
};

const WalletDisconnectButton = () => {
    return (
        <DefaultWalletDisconnectButton className="wallet-adapter-button" />
    );
};

export { WalletMultiButton, WalletDisconnectButton };
