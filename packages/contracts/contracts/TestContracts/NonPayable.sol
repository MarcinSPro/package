// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;

contract NonPayable {
    bool isPayable;

    function setPayable(bool _isPayable) external {
        isPayable = _isPayable;
    }

    function forward(address _dest, bytes calldata _data) external payable {
        (bool success, bytes memory returnData) = _dest.call{ value: msg.value }(_data);
        require(success, string(returnData));
    }

    receive() external payable {
        require(isPayable);
    }
}
