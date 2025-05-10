import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Key from './key';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WalletButtons from './component/wallet';
import { ShowSolBalance } from './Balance';
// import { TokenLaunchpad } from './component/TokenGenrator';
import { SendTokens } from './SendMoney';

import { TokenLaunchpad } from './Tokeng';






function App() {
  return (
    <>
      <Router>
        <Routes>


          <Route path="/about" element={< Key />} />
          <Route path="/" element={<WalletButtons />} />
          <Route path="/contact" element={<Key />} />
          <Route path="/Balance" element={<ShowSolBalance />} />
          <Route path="/token" element={<TokenLaunchpad />} />
          <Route path="/sendSolana" element={< SendTokens />} />
        </Routes>


      </Router>





    </>
  )
}

export default App
