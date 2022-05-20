// this file we are going to use for deploying our smart contract ->

const {ethers} = require('hardhat')

const main = async () => {

    // gets the smart contract with the name inside ''
    const tinderFactory = await ethers.getContractFactory('TinderERC721')
    // deploying the smart-contract 
    const TinderContract = await tinderFactory.deploy()

    console.log('TINDER CONTRACT ADDRESS: ',TinderContract.address);
}

// for running our main function->
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log('Error in deploying Contract >> ', error)
    process.exit(1)
  })

// ******************************************************
//   terminal command to deploy smart-contract => npx hardhat run scripts/deploy.js --network rinkeby
// ******************************************************
// ******************************************************
//   if this error comes Error: Cannot find module 'nomiclabs/hardhat-waffle'
//  ---- try ------> $ npm install --save-dev @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' @no
// miclabs/hardhat-ethers 'ethers@^5.0.0'
// ****************************************************** 
// ****************************************************** 