import Lottie from 'react-lottie-player'
import walletJson from '../assets/json/wallet-anima.json'
import apiClient from "../axios"
import { formatMoney } from "../helpers"
import { useEffect, useState } from "react"
import Transactions from "../components/Transactions"
import WalletDropDown from "../components/WalletDropdown"
import { router } from '../router'
import TransferModal from "../components/dashboard/TransferModal";
import ReceiveModal from "../components/dashboard/ReceiveModal";
import { QrReader } from 'react-qr-reader'

export default function Dashboard() {
    const [wallets, setWallets] = useState({
        wallets: {
            "fajofoajfoajfoajofa": {

            }
        },
        primary: {
            currency: 0,
            balance: 0,
            wlid: ""
        }
    })
    const [transactions, setTransactions] = useState([{
        title: "",
        tnlid: "",
        added: new Date(),
        value: 0,
        type: 1
    }])
    const [walletArray, setWalletArray] = useState([{
        currency: 0,
        name: "",
        wlid: "",
        balance: 0
    }])
    const [url, setUrl] = useState("")
    const [qrData, setQrData] = useState("No result")

    const fetchWallets = async () => {
        try {
            const response = await apiClient.get('/core/welcome', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setWallets(response.data.info.wallets)
            fetchTransactions(response.data.info.wallets.primary.wlid)
            fetchQrCode(response.data.info.wallets.primary.wlid)

            const result = []
            result.push(response.data.info.wallets.primary)
            for (let field in response.data.info.wallets.wallets) {
                result.push(response.data.info.wallets.wallets[field])
            }

            setWalletArray(result)
        } catch (error) {
            console.log(error)
            // @ts-ignore
            if (error.response.status === 401) {
                router.navigate({
                    from: '/',
                    to: '/login'
                })
            }
        }
    }

    const fetchTransactions = async (wlid: string) => {
        try {
            const response = await apiClient.get(`/transaction/fetch/${wlid}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('transactions', JSON.stringify(response.data.data))
            setTransactions(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchQrCode(wlid: string) {
        apiClient.get(`/wallet/receive/${wlid}`, {
            responseType: 'blob',
            params: {
                fg: '000000',
                bg: 'FFFFFF',
                size: 256
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setUrl(URL.createObjectURL(res.data))
        }).catch((err) => {
            console.error(err)
        })


    }

    useEffect(() => {
        fetchWallets()
    }, [])

    return  <div className="topBG">
                <div className="container">
                    <h2 className="page-title"> Home </h2>
                    <div className="wallet-card">
                        <div className="wallet-am">
                            <Lottie speed={0.5} className="lottie" loop animationData={walletJson} play style={{ width: 80, height: 80 }} />
                            <h3> {formatMoney(wallets.primary.currency, wallets.primary.balance)} </h3>
                            <h6> Total Bal in Naira Wallet </h6>
                        </div>
                        <div className="wallet-bm">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#transferModal"> <i className="fa fa-paper-plane"></i>&nbsp; Transfer </a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#" data-bs-toggle="modal" data-bs-target="#receiveModal"> <i className="fa fa-hand-holding-heart"></i>&nbsp; Receive </a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#"> <i className="fa fa-qrcode"></i>&nbsp; Scan </a>
                        </div>

                        <div className="elx">
                            <div className="dropdown">
                                <a className="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-ellipsis-v"></i>
                                </a>

                                <WalletDropDown data={walletArray} />
                            </div>
                        </div>

                    </div>

                    <h4 className="inner-title"> Recent Transactions </h4>
                    <div className="page-content">
                        <div className="transactions">
                            <div className="clearfix">
                                <Transactions transactions={transactions.slice(0, 10)} />
                            </div>
                        </div>
                    </div>
                </div>
                <TransferModal />
                <ReceiveModal url={url} />
            </div>
}