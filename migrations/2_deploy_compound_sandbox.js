  const FakeDai = artifacts.require("./FakeDai");
  const FakeCDai = artifacts.require("./FakeCDai");
  const FakeCEther = artifacts.require("./FakeCEther");
  const FakeComptroller = artifacts.require("./FakeComptroller");
  const FakeCDaiInterestRateModel = artifacts.require("./FakeCDaiInterestRateModel");
  const FakeCEtherInterestRateModel = artifacts.require("./FakeCEtherInterestRateModel");

module.exports = async (deployer, network) => {
  // Only setup Compound on local blockchain
  if (network !== 'development') return;

  // 1. Deploy DAI token contract
  deployer.deploy(FakeDai)

    // 2. Deploy Interest Model contracts for cDAI and cETH
    .then(() => deployer.deploy(FakeCDaiInterestRateModel))
    .then(() => deployer.deploy(FakeCEtherInterestRateModel))

    // 3. Deploy Comptroller contract
    .then(() => deployer.deploy(FakeComptroller))

    // 4. Deploy cDAI contract
    .then(() => deployer.deploy(
      FakeCDai,
      FakeDai.address,
      FakeComptroller.address,
      FakeCDaiInterestRateModel.address
    ))

    // 5. Deploy cEther contract
    .then(() => deployer.deploy(
      FakeCEther,
      FakeComptroller.address,
      FakeCEtherInterestRateModel.address
    ))

    // 6. Activate cToken markets
    .then(() => FakeComptroller.deployed())
    .then(instance => {
      instance._supportMarket(FakeCDai.address)
      instance._supportMarket(FakeCEther.address)
    })
};
