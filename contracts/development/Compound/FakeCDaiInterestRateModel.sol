// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./src/WhitePaperInterestRateModel.sol";

contract FakeCDaiInterestRateModel is WhitePaperInterestRateModel {
    constructor()
    WhitePaperInterestRateModel(
      0.05 * (10 ** 18),
      0.12 * (10 ** 18)
    )
    public
    {}
}
