// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./src/CErc20.sol";

contract FakeCDai is CErc20 {
    constructor(
      address _token,
      ComptrollerInterface _comptroller,
      InterestRateModel _interestRateModel
    )
    CErc20(
      _token,
      _comptroller,
      _interestRateModel,
      200000000 * (10 ** 18),
      "Fake Compound Dai",
      "cDAI",
      8
    )
    public
    {}
}
