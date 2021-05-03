var VOTX=artifacts.require('VOTX')
    module.exports = function(deployer,network) {
        deployer.then(async () => {
        await deployer.deploy(VOTX)
        }
    )
};
