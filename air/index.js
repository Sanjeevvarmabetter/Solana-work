
//create wallet
const {
	Connection,
	PublicKey,
	clusterApiUrl,
	Keypair,
	LAMPORTS_PER_SOL,
} = require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretkey = wallet._keypair.secretkey

console.log(publicKey)
console.log(secretkey)

//to get balance from wallet

const getwalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'),'confirmed')
        const walletbalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance is ${walletbalance}`)

    }catch(err) {
        console.error(err)
    }
}
const main = async() => {
    await getwalletBalance()
}
main()
//we got our balance
//it says zero works well