const Votx = artifacts.require('VOTX');
var Vesting=artifacts.require('Vesting')
module.exports = async function (deployer, network) {

    // Creating instance for zoracles token
    const votx = await Votx.deployed();
    
    const vesting = await deployer.deploy(Vesting, votx.address);
    
    console.log("Successfully Deployed Vesting", vesting.address);
};
