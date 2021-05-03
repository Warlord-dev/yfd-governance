var Timelock=artifacts.require('Timelock')
module.exports = function(deployer,network) {
    deployer.then(async () => {
        await deployer.deploy(Timelock)
        }
    )
};
