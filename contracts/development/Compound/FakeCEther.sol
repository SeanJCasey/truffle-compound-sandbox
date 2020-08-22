// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./src/CEther.sol";

contract FakeCEther is CEther {
    constructor(
      ComptrollerInterface _comptroller,
      InterestRateModel _interestRateModel
    )
    CEther(
      _comptroller,
      _interestRateModel,
      200000000 * (10 ** 18),
      "Fake Compound Ether",
      "cETH",
      8
    )
    public
    {}
}
