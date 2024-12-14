import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39"
import { EthWallet } from './component/Eth';
import { SolanaWallet } from './component/SolonaWallet';
import Navbar from './component/Navbar';




function App() {

  const [mnemonic, setMnemonic] = useState("");
  return (
    <>
      <Navbar />
      <div class="flex items-center justify-center mt-4 mb-16">
        <div class="flex flex-wrap">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-lg"
            onClick={async function () {
              const mn = await generateMnemonic();
              setMnemonic(mn);
            }}
          >
            Create Seed Phrase
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4 mb-4">
        <a href="#" class="   block max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  ">
          <p class=" flex items-center justify-center font-normal text-gray-700 dark:text-gray-400 mb-4">THIS IS THE SECERET KEY</p>
          <h5 class="  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white jus">{mnemonic}</h5>

        </a>
      </div>
      <div class="flex items-center justify-center mt-4 mb-4">
        <EthWallet mnemonic={mnemonic} />
      </div>

      <SolanaWallet mnemonic={mnemonic} />

    </>
  )
}

export default App
