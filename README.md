# Express-Certificate-Dapp-Infura

Simple Certificate Dapp with Infura (and IPFS).

## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/nodejs.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/express.svg" width="36" height="36" alt="Express" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/javascript.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/solidity.svg" width="36" height="36" alt="Solidity" /></a>
<a href="https://web3js.readthedocs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/web3js.svg" width="36" height="36" alt="Web3Js" /></a>
<a href="https://trufflesuite.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/truffle.svg" width="36" height="36" alt="Truffle" /></a>
<a href="https://ipfs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/ipfs.svg" width="36" height="36" alt="IPFS" /></a>
<a href="https://docs.infura.io/infura/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/infura.svg" width="36" height="36" alt="Infura" /></a>
</div>

## ⚙️ Run Locally

Make sure to have a reasonable amount of sepolia 'test ether' on your address and an IPFS service running on port 8080.  

Clone the project

```bash
git clone https://github.com/Kerala-Blockchain-Academy/Express-Certificate-Dapp-Infura.git
```

Go to the project directory

```bash
cd Express-Certificate-Dapp-Infura
```

Go to the truffle folder

```bash
cd truffle
```

Install truffle globally

```bash
npm install -g truffle
```

Install other dependencies (hdwallet-provider & dotenv)

```bash
npm install
```

Create a .env file & add private key and project id

```bash
touch .env
```

truffle/.env

```bash
PRIVATE_KEY=<--your private_key-->
PROJECT_API=<--your project_api-->
```

Compile & migrate the contract to sepolia

```bash
truffle migrate --network sepolia
```

Go back to the project directory & install dependencies

```bash
cd .. && npm install
```

Copy the .env file from the truffle folder to the main folder

```bash
cp ./truffle/.env ./
```

Start the application

```bash
npm run dev
```

## License

Distributed under the MIT License.
