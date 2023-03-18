import { router } from "../router"
import Lottie from 'react-lottie-player'
import walletJson from '../assets/json/wallet-anima.json'
import apiClient from "../axios"
import { formatMoney } from "../helpers"
import { useEffect, useState } from "react"
import TransactionCard from "../components/TransactionCard"
import Transactions from "../components/Transactions"
import {AxiosError} from "axios";


export default function Dashboard() {
    const [wallets, setWallets] = useState({
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

    const fetchWallets = async () => {
        try {
            const response = await apiClient.get('/core/welcome')
            setWallets(response.data.info.wallets)
            fetchTransactions(response.data.info.wallets.primary.wlid)
        } catch(error) {
            console.log(error)
        }
    }

    const fetchTransactions = async (wlid: string) => {
        try {
            const response = await apiClient.get(`/transaction/fetch/${wlid}`)
            setTransactions(response.data.data)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchWallets()
    }, [])

    return <div className="wrapper">
        <div  id="homepage">
            <div className="topBG">
                <div className="container">
                    <h2 className="page-title"> Home </h2>
                    <div className="wallet-card">
                        <div className="wallet-am">
                            <Lottie speed={0.5} className="lottie" loop animationData={walletJson} play style={{ width: 80, height: 80}}/>
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

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">
                                        <h5> $30,000 <br /><small> Dollar Wallet </small> </h5>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <h5> C30,000 <br /><small> Coins Wallet </small> </h5>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <h5> pts30,000 <br /><small>Points Wallet </small> </h5>
                                    </a></li>
                                </ul>
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
            </div>
        </div>

        
    <nav>
      <a className="nav-item active" href="index.html">
        <i className="fa fa-home"></i><span>Home</span>
      </a>
      
      <a className="nav-item " href="activity.html">
        <i className="far fa-chart-bar"></i><span>Activity</span>
      </a>
      
      <a className="nav-item" href="user.html">
        <i className="far fa-user"></i><span>User</span>
      </a>

</nav>
    </div>
    
}