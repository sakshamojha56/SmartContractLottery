# SmartContractLottery 🎰

A decentralized lottery smart contract built on Ethereum, utilizing **Solidity** for secure and transparent ticket purchasing and prize distribution. The project integrates **Chainlink VRF** for provably fair random winner selection and **Chainlink Automation** for scheduled, trustless lottery draws.

> 🚀 Deployed on the **Sepolia Testnet**  
> ✅ Achieves **100% unit test coverage** using **Hardhat** and **Mocha/Chai**

## 🎯 Project Overview

SmartContractLottery is a Web3-based lottery system that ensures fairness, transparency, and automation through Ethereum smart contracts and Chainlink oracles.

Users can:
- Purchase tickets using ETH
- Participate in fair draws powered by Chainlink VRF
- Automatically trigger draws via Chainlink Automation

---

## ✨ Features

- 🔒 **Secure Lottery Logic** – Built with Solidity for trustless operation
- 🎲 **Provably Fair Randomness** – Via Chainlink VRF
- 🤖 **Automated Draws** – Through Chainlink Automation
- 🧪 **100% Test Coverage** – Verified with Mocha/Chai and Hardhat
- 🧾 **Verified Smart Contract** – Publicly viewable on Sepolia Etherscan

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16+)
- npm or pnpm (v8+)
- MetaMask (browser extension)
- Git

You’ll also need:

- **Sepolia ETH** from [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
- **Sepolia LINK** from [Chainlink Faucet](https://faucets.chain.link/sepolia)
- **Infura/Alchemy Account** for Sepolia RPC
- **Etherscan API Key**

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/sakshamojha56/SmartContractLottery.git
cd SmartContractLottery

# Install dependencies
npm install
# or
pnpm install

# (If Hardhat is not installed)
npm install --save-dev hardhat
````

---

## 🔧 Configuration

Create a `.env` file in the root directory:

```env
WEB3_INFURA_PROJECT_ID=your_infura_project_id
PRIVATE_KEY=your_metamask_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_project_id
ETHERSCAN_API_KEY=your_etherscan_api_key
```

> ⚠️ **Never commit your private key to GitHub.**

Load the variables into your shell:

```bash
source .env
```

---

## 🚀 Deployment

### Compile the Contract

```bash
npx hardhat compile
```

### Deploy to Sepolia

Ensure your MetaMask wallet holds Sepolia ETH and LINK:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Verify on Etherscan

```bash
npx hardhat verify --network sepolia <deployed_contract_address>
```

---

## 🧪 Testing

Run tests using Hardhat and Mocha:

```bash
npx hardhat test
```

✅ **Achieves 100% test coverage** for all major functionalities.

---

## 💡 Usage

### Basic Interactions

* **Purchase Ticket** – Send ETH to the contract via MetaMask
* **Start Lottery** – Triggered by the owner (automated by Chainlink)
* **End Lottery** – Winner is selected and paid automatically

### Run via Hardhat Scripts

```bash
npx hardhat run scripts/start_lottery.js --network sepolia
npx hardhat run scripts/enter_lottery.js --network sepolia
npx hardhat run scripts/end_lottery.js --network sepolia
```

### View on Etherscan

Check the contract status on Sepolia Etherscan:
🔗 `https://sepolia.etherscan.io/address/<your_contract_address>`

---

## 🤝 Contributing

Contributions are welcome! 🚀

```bash
# Create a feature branch
git checkout -b feature/your-feature

# Make your changes
git commit -m "Add: your feature"

# Push and create a PR
git push origin feature/your-feature
```

Please include tests for new features and follow the project’s coding style.

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

* [Chainlink VRF](https://docs.chain.link/docs/vrf/)
* [Chainlink Automation](https://docs.chain.link/chainlink-automation/introduction/)
* [Hardhat](https://hardhat.org/)
* [Ethers.js](https://docs.ethers.org/)

---

> Built with ❤️ by [@sakshamojha56](https://github.com/sakshamojha56)
