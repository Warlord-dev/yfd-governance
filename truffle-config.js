/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 require("dotenv").config();
 const HDWalletProvider = require('truffle-hdwallet-provider');
 
 const providerFactory = (network) =>
     new HDWalletProvider(
         process.env.PRIVATE_KEY,
         `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`
     );
 
 module.exports = {
     /**
      * Networks define how you connect to your ethereum client and let you set the
      * defaults web3 uses to send transactions. If you don't specify one truffle
      * will spin up a development blockchain for you on port 9545 when you
      * run `develop` or `test`. You can ask a truffle command to use a specific
      * network from the command line, e.g
      *
      * $ truffle test --network <network-name>
      */
 
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: process.env.ETHESCANKEY
    },
     networks: {
         // development: {
         //     host: "127.0.0.1",     // Localhost (default: none)
         //     port: 8545,            // Standard Ethereum port (default: none)
         //     network_id: "*",       // Any network (default: none)
         // },
         rinkeby: {
            provider: () => providerFactory("rinkeby"),
            network_id: 4,       // Ropsten's id
            gas: 5500000,        // Ropsten has a lower block limit than mainnet
            timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: false,     // Skip dry run before migrations? (default: false for public nets )
            gasPrice: 100000000000, // Gas price
        },
         ropsten: {
             provider: () => providerFactory("ropsten"),
             network_id: 3,       // Ropsten's id
             gas: 5500000,        // Ropsten has a lower block limit than mainnet
             timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
             skipDryRun: false,     // Skip dry run before migrations? (default: false for public nets )
             gasPrice: 100000000000, // Gas price
         },
         mainnet: {
             provider: () => providerFactory("mainnet"),
             network_id: 1,       // Mainnet's id
             gas: 7000000,        // Mainnet has a high block limit
             timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
             skipDryRun: false,     // Skip dry run before migrations? (default: false for public nets )
             gasPrice: 100000000000 // Gas price (100 Gwei)
         },
     },
 
     // Set default mocha options here, use special reporters etc.
     mocha: {
        //  timeout: 100000
     },
 
     // Configure your compilers
     compilers: {
         solc: {
             version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
             docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
             settings: {          // See the solidity docs for advice about optimization and evmVersion
                 optimizer: {
                     enabled: false,
                     runs: 200
                 },
                 evmVersion: "istanbul"
             }
         }
     }
 };
 