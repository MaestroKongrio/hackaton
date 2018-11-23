var Migrations = artifacts.require("./Migrations.sol");
var House = artifacts.require("./House.sol");
var KongrioToken = artifacts.require("./KongrioToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(House);
  deployer.deploy(KongrioToken);
};
