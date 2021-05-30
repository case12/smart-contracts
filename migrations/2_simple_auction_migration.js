const SimpleAuction = artifacts.require("SimpleAuction");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(SimpleAuction, 60, accounts[0]);
};
