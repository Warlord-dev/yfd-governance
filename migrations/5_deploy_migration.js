const Votx = artifacts.require('VOTX');
const Votx2 = artifacts.require('VOTX2');
var ShareExchange=artifacts.require('ShareExchange')
module.exports = async function (deployer, network) {

    // Creating instance for zoracles token
    const votx = await Votx.deployed();
    const votx2 = await Votx2.deployed();
    
    const shareexchange = await deployer.deploy(ShareExchange, votx.address, votx2.address);
    
    console.log("Successfully Deployed ShareExchange", shareexchange.address);
};
