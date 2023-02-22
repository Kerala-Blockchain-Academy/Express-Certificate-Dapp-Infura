import * as dotenv from 'dotenv';
dotenv.config()
import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
import Cert from './Cert.json' assert { type: 'json' };
import deployer from './deployer.json' assert { type: 'json' };

const provider = new HDWalletProvider({
  privateKeys: [process.env.PRIVATE_KEY],
  providerOrUrl: `https://goerli.infura.io/v3/${process.env.PROJECT_ID}`
});

export const web3 = new Web3(provider);
export const myContract = new web3.eth.Contract(
  Cert.abi,
  Cert.networks['5'].address,
);
export const account = deployer.from;