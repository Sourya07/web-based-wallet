import React from 'react';
import './styles.css';

import {
    WalletMultiButton as DefaultWalletMultiButton,
    WalletDisconnectButton as DefaultWalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';

const WalletMultiButton = () => {
    return (
        <DefaultWalletMultiButton />
    );
};

const WalletDisconnectButton = () => {
    return (
        <DefaultWalletDisconnectButton />
    );
};

export { WalletMultiButton, WalletDisconnectButton };
