const Migrations = artifacts.require("GGMToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

