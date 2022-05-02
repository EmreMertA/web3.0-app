require('@nomiclabs/hardhat-waffle');
// 0x00ADa8ddF5a4112e7D1D79Fa96f9AaB67c77eF1e
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4awXF0pCVFEZOny1nMtCrz8OvgT430Q1',
      accounts: ['4604e332c5152f1743f2fbbf4608df8d2b2a74b72025db285f42a397257e922f'],
    },
  },
};