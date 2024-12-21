import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Key from './key';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WalletButtons from './component/wallet';






function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<WalletButtons />} />
          <Route path="/about" element={< Key />} />
          <Route path="/contact" element={<Key />} />
        </Routes>


      </Router>





    </>
  )
}

export default App
