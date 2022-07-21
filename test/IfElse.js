const { expect } = require("chai");

describe("If Else contract", function () {
  // ...previous test...

  it("Should return 0 for any positive integer less than 10", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 4
    expect(await hardhatIfElse.foo(4)).to.equal(0);
  });
});