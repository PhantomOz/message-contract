import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Message", function(){
    async function DeployMessage() {
        const msg = "Hello Test";
        const Message = await ethers.getContractFactory("MyMessage");
        const message = await Message.deploy(msg);
        await message.waitForDeployment();
        return {message, msg}
    }

    describe("Deployment", function(){
        it("Should have deployed with exact message", async function() {
           const {message, msg} = await loadFixture(DeployMessage);
           expect(await message.s_message()).to.be.equal(msg); 
        });
    })
    describe("Getting And Setting Message", function(){
        it("Should get the s_message value", async function() {
           const {message, msg} = await loadFixture(DeployMessage);
           expect(await message.getMessage()).to.be.equal(msg); 
        });
        it("Should change and get the s_message value", async function() {
           const {message} = await loadFixture(DeployMessage);
           const msg = "Changing Text";
           await message.setMessage(msg);
           expect(await message.s_message()).to.be.equal(msg); 
        });
    })
});