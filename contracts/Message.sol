// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract MyMessage {
    string public s_message;

    constructor(string memory initialMessage) {
        s_message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        s_message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return s_message;
    }
}
