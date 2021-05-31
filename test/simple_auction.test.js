const SimpleAuction = artifacts.require("SimpleAuction");

const nowSec = () => Math.floor(Date.now() / 1000);

contract("Simple Auction", async (accounts) => {
  let result;
  let simpleAuction;
  const beneficiary = accounts[0];

  it("should create auction with beneficiary set", async () => {
    simpleAuction = await SimpleAuction.new(60, beneficiary);
    result = await simpleAuction.beneficiary();
    assert.equal(result, beneficiary);
  });

  it("should create auction with end time", async () => {
    const now = nowSec();
    simpleAuction = await SimpleAuction.new(60, beneficiary);
    result = await simpleAuction.auctionEndTime();

    assert.equal(result.toNumber(), now + 60);
  });
});
