const VOTX = artifacts.require('VOTX');
const Timelock = artifacts.require('Timelock');
const GovernorAlpha = artifacts.require('GovernorAlpha');
module.exports = async function(deployer,network,accounts) {
    // Creating instance for timelock and zoracles token
    const timelock = await Timelock.deployed();
    const votx = await VOTX.deployed();
    // deployer.then(async () => {
    //     await deployer.deploy(GovernorAlpha, timelock.address, votx.address, accounts[0])
    //     }
    // )
    
    const govern = await deployer.deploy(GovernorAlpha, timelock.address, votx.address, accounts[0]);
    
    console.log("Successfully Deployed GovernorAlpha", govern.address);
};

// var GovernorAlpha=artifacts.require('GovernorAlpha')
// module.exports = function(deployer,network) {
//     deployer.then(async () => {
//         await deployer.deploy(GovernorAlpha)
//         }
//     )
// };
