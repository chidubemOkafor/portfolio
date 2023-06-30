import { ethers } from "ethers"

// export const connectWallet = async() => {
//   try {
//      if(window.ethereum != undefined) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum)
//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner()
//         return signer
        
//      } else {
//         alert("you need to install metamask https://metamask.io/")
//      }
//   }catch(err) {
//     console.error(err)
//   }
// }

export class Wallet {
   
    async connect() {
        try {
            if(window.ethereum != undefined) {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner()
                this.signer = signer
                
            } else {
                alert("you need to install metamask https://metamask.io/")
            }
        } catch(err) {
            console.error(err)
        }

    }

    getSigner () {
        return this.signer 
    }
}