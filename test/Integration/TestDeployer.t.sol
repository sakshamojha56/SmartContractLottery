// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;


import {DeployRaffle} from "../../script/DeployRaffle.s.sol";
import {Test, console} from "forge-std/Test.sol";
import {HelperConfig} from "../../script/HelperConfig.s.sol";
import {Raffle} from "../../src/Raffle.sol";
import {AddConsumer, CreateSubscription, FundSubscription} from "../../script/Interactions.s.sol";
import {StdCheats} from "forge-std/StdCheats.sol";

contract RaffleDeployTest is StdCheats, Test{

DeployRaffle deployRaffle;
uint64 public  subscriptionId;
Raffle raffle;
 HelperConfig  helperConfig;
 address public  vrfCoordinatorV2;

 
function setUp() external {
    deployRaffle = new DeployRaffle();
    

   
}
  function testisrunworking() public {
        
   (raffle, helperConfig,subscriptionId , vrfCoordinatorV2 ) = deployRaffle.run();
   assert(address(raffle) != address(0));
   assert(address(helperConfig) != address(0));
   assert(subscriptionId != 0 );
    assert(address(vrfCoordinatorV2) != address(0));
        
  }

  function testwhenidnotzero() public{}

  
}