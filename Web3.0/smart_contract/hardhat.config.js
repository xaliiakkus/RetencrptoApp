require('hardhat/config').HardhatUserConfig
//https://eth-mainnet.g.alchemy.com/v2/XvSU3Y2iPv7qG_Ls9vYvqJpDjaS_BMnZ
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    sepolia:{
    url:'https://faucet.sepolia.dev//XvSU3Y2iPv7qG_Ls9vYvqJpDjaS_BMnZ',
    accounts:['19d0f7e468b83e8a7ab000e04581c9ae7bbf4d1743a2e909b8e8a4da43ddbd00']
   }
  }
 
};
