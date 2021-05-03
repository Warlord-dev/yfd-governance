var VOTX=artifacts.require('VOTX')
    module.exports = function(deployer,network) {
        deployer.then(async () => {
        await deployer.deploy(VOTX)
        }
    )
};

// var VOTX2=artifacts.require('VOTX2')
//     module.exports = function(deployer,network) {
//         deployer.then(async () => {
//         await deployer.deploy(VOTX2)
//         }
//     )
// };
