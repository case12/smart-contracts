const SimpleAuction = artifacts.require("SimpleAuction");

module.exports = async function (callback) {
  let simpleAuction = await SimpleAuction.deployed();
  await simpleAuction.auctionEnd();
  callback();
};
