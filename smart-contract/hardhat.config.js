require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env' })


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      // RINKEBY_PRIVATE_KEY in the account will be the account which will be paying the gas fees for deployment and all
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};
