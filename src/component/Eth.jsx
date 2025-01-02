import { useState } from "react";
import { mnemonicToSeed, validateMnemonic } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [error, setError] = useState(null);

    const addWallet = async () => {
        try {
            // Validate mnemonic
            if (!mnemonic || !validateMnemonic(mnemonic)) {
                throw new Error("Invalid mnemonic phrase");
            }

            // Generate seed and derive wallet

            const seed = await mnemonicToSeed(mnemonic);
            const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            const privateKey = child.privateKey;
            const wallet = new Wallet(privateKey);

            // Update state with new wallet
            setCurrentIndex(currentIndex + 1);
            setAddresses([...addresses, wallet.address]);
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            {error && <div style={{ color: "red" }}>Error: {error}</div>}

            <div class="flex items-center justify-center mt-4 mb-4">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={addWallet}>ETH ADDRESS</button>
            </div>


            {addresses.map((address, index) => (
                <div key={index}>
                    Eth - {address}
                </div>
            ))}
        </div>
    );
};
