// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private count;

    // Event to emit when the counter is incremented
    event CounterIncremented(uint256 newCount);

    // Event to emit when the counter is decremented
    event CounterDecremented(uint256 newCount);

    constructor() {
        count = 0;
    }

    // Function to get the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Function to increment the counter
    function increment() public {
        count += 1;
        emit CounterIncremented(count);
    }

    // Function to decrement the counter
    function decrement() public {
        require(count > 0, "Counter: cannot decrement below zero");
        count -= 1;
        emit CounterDecremented(count);
    }

    // Function to set the counter to a specific value
    function setCount(uint256 _newCount) public {
        count = _newCount;
    }
}