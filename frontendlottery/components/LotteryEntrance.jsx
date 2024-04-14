import { useWeb3Contract } from "react-moralis"
import { transactions as transactions31337 } from "../constants/broadcast/DeployRaffle.s.sol/31337/run-latest.json"
import { transactions as transactions11155111 } from "../constants/broadcast/DeployRaffle.s.sol/11155111/run-latest.json"
import { useState } from "react"


export default function LotteryEntrance() {


    /* abi: // ,
         contractAddress: // ,
     function: //,
         params: {},
     msgValue: //    */
    let contractAddress

    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const [EntranceFee, setEntranceFee] = useState(0)
    const transactions = `transactions${chainId}`


    transactions.length > 0 ? transactions.forEach(transaction => {
        if (transaction.contractName == "Raffle") {
            contractAddress = transaction.contractAddress
            return
        }
    }) : <div> Sorry! it is not avalible on your Chain</div>


    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: [{ "type": "constructor", "inputs": [{ "name": "subscriptionId", "type": "uint64", "internalType": "uint64" }, { "name": "gasLane", "type": "bytes32", "internalType": "bytes32" }, { "name": "interval", "type": "uint256", "internalType": "uint256" }, { "name": "entranceFee", "type": "uint256", "internalType": "uint256" }, { "name": "callbackGasLimit", "type": "uint32", "internalType": "uint32" }, { "name": "vrfCoordinatorV2", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "NUM_WORDS", "inputs": [], "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }], "stateMutability": "view" }, { "type": "function", "name": "checkUpkeep", "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "outputs": [{ "name": "upkeepNeeded", "type": "bool", "internalType": "bool" }, { "name": "", "type": "bytes", "internalType": "bytes" }], "stateMutability": "view" }, { "type": "function", "name": "enterRaffle", "inputs": [], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "getEntranceFee", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getInterval", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getLastTimeStamp", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getNumWords", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "getNumberOfPlayers", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getPlayer", "inputs": [{ "name": "index", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "getRaffleState", "inputs": [], "outputs": [{ "name": "", "type": "uint8", "internalType": "enum Raffle.RaffleState" }], "stateMutability": "view" }, { "type": "function", "name": "getRecentWinner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "getRequestConfirmations", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "performUpkeep", "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "rawFulfillRandomWords", "inputs": [{ "name": "requestId", "type": "uint256", "internalType": "uint256" }, { "name": "randomWords", "type": "uint256[]", "internalType": "uint256[]" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "RaffleEnter", "inputs": [{ "name": "player", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "RequestedRaffleWinner", "inputs": [{ "name": "requestId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "WinnerPicked", "inputs": [{ "name": "player", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "error", "name": "OnlyCoordinatorCanFulfill", "inputs": [{ "name": "have", "type": "address", "internalType": "address" }, { "name": "want", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "Raffle__RaffleNotOpen", "inputs": [] }, { "type": "error", "name": "Raffle__SendMoreToEnterRaffle", "inputs": [] }, { "type": "error", "name": "Raffle__TransferFailed", "inputs": [] }, { "type": "error", "name": "Raffle__UpkeepNotNeeded", "inputs": [{ "name": "currentBalance", "type": "uint256", "internalType": "uint256" }, { "name": "numPlayers", "type": "uint256", "internalType": "uint256" }, { "name": "raffleState", "type": "uint256", "internalType": "uint256" }] }],
        contractAddress: contractAddress,
        function: "enterRaffle",
        params: {},
        msgValue: EntranceFee
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: [{ "type": "constructor", "inputs": [{ "name": "subscriptionId", "type": "uint64", "internalType": "uint64" }, { "name": "gasLane", "type": "bytes32", "internalType": "bytes32" }, { "name": "interval", "type": "uint256", "internalType": "uint256" }, { "name": "entranceFee", "type": "uint256", "internalType": "uint256" }, { "name": "callbackGasLimit", "type": "uint32", "internalType": "uint32" }, { "name": "vrfCoordinatorV2", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "NUM_WORDS", "inputs": [], "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }], "stateMutability": "view" }, { "type": "function", "name": "checkUpkeep", "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "outputs": [{ "name": "upkeepNeeded", "type": "bool", "internalType": "bool" }, { "name": "", "type": "bytes", "internalType": "bytes" }], "stateMutability": "view" }, { "type": "function", "name": "enterRaffle", "inputs": [], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "getEntranceFee", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getInterval", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getLastTimeStamp", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getNumWords", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "getNumberOfPlayers", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getPlayer", "inputs": [{ "name": "index", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "getRaffleState", "inputs": [], "outputs": [{ "name": "", "type": "uint8", "internalType": "enum Raffle.RaffleState" }], "stateMutability": "view" }, { "type": "function", "name": "getRecentWinner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "getRequestConfirmations", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "pure" }, { "type": "function", "name": "performUpkeep", "inputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "rawFulfillRandomWords", "inputs": [{ "name": "requestId", "type": "uint256", "internalType": "uint256" }, { "name": "randomWords", "type": "uint256[]", "internalType": "uint256[]" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "RaffleEnter", "inputs": [{ "name": "player", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "RequestedRaffleWinner", "inputs": [{ "name": "requestId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "WinnerPicked", "inputs": [{ "name": "player", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "error", "name": "OnlyCoordinatorCanFulfill", "inputs": [{ "name": "have", "type": "address", "internalType": "address" }, { "name": "want", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "Raffle__RaffleNotOpen", "inputs": [] }, { "type": "error", "name": "Raffle__SendMoreToEnterRaffle", "inputs": [] }, { "type": "error", "name": "Raffle__TransferFailed", "inputs": [] }, { "type": "error", "name": "Raffle__UpkeepNotNeeded", "inputs": [{ "name": "currentBalance", "type": "uint256", "internalType": "uint256" }, { "name": "numPlayers", "type": "uint256", "internalType": "uint256" }, { "name": "raffleState", "type": "uint256", "internalType": "uint256" }] }],
        contractAddress: contractAddress,
        function: "getEntranceFee",
        params: {}

    })




    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const something = (await getEntranceFee()).toString()
                setEntranceFee(something)
                console.log(something)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

















    return <div>
        if {contractAddress ? <div>Hi from Lottery Entrance!<div>{ethers.utils.formatUnits(EntranceFee, "ether")}</div></div> : <div>No Raffle Address </div>}
    </div>
}