import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@solana/wallet-adapter-react-ui/styles.css';

import {
  WalletModalProvider,

} from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import Navbar from './component/Navbar/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/kKxeemMSH6XinKR75nh-mNumosVas9TR"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <Navbar />
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  </StrictMode>,
)

