const { expect } = require("chai");

describe("If Else contract", function () {
  // ...previous test...

  it("foo should return 0 for any positive integer less than 10", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 4
    expect(await hardhatIfElse.foo(4)).to.equal(0);
  });

  it("foo should return 1 for any positive integer greater than or equal to 10 and less than 20", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 10
    expect(await hardhatIfElse.foo(10)).to.equal(1);
  });

  it("foo should return 2 for any positive integer greater than or equal to 20", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 20
    expect(await hardhatIfElse.foo(20)).to.equal(2);
  });

  it("ternary should return 1 for any positive integer less than 10", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 5
    expect(await hardhatIfElse.ternary(5)).to.equal(1);
  });

  it("foo should return 2 for any positive integer greater than or equal to 10", async function() {
    const [owner] = await ethers.getSigners();

    const IfElse = await ethers.getContractFactory("IfElse");

    const hardhatIfElse = await IfElse.deploy();

    // Input the number 15
    expect(await hardhatIfElse.ternary(15)).to.equal(2);
  });

});