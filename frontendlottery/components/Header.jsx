//Harder Way
/* import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function Header() {

    const { enableWeb3, account, isWeb3Enabled, Moralis , deactivateWeb3, isWeb3EnableLoading } = useMoralis()
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    //the one inside the square bracket is dependency array it specifies
    //which values should i check and first one specifies what to do when particular things works // or is true 
    //it will run two times due to strict mode
    //if no dependency array: run anytime something re-renders
    //CARERFUL! with this bcoz of circular infinte loop

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account Changed to ${account}`)})
            if (account === null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("No Account Found")
            }
             }, [])
return (
    <div>
        {account} ? Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)} : <button onClick={async () => {
            //pehli baar storage me isiliye save kiya kyoki agli baar refresh krne par button dabana na pade agar connected ho lekin agar 
            //user ne disconnect krliya to dikkat ho jyegi isiliye 
            await enableWeb3()
            if (typeof window !== 'undefined') {
                window.localStorage.setItem("connected", "inject")
            }
        }}
        disabled = {isWeb3EnableLoading}>Connect</button>



    </div>
)
} */

import { ConnectButton } from "web3uikit"


export default function Header() {
    return (
        <div>
            Decentralized Lottery!
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

