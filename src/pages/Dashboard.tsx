import { router } from "../router"
import Lottie from 'react-lottie-player'
import walletJson from '../assets/json/wallet-anima.json'

export default function Dashboard() {
    // if (!localStorage.getItem('token')) {
    //    router.navigate({
    //     from: '/',
    //     to: '/login'
    //    })
    // }
    return <div className="wrapper">
        <div id="homepage">
            <div className="topBG">
                <div className="container">
                    <h2 className="page-title"> Home </h2>
                    <div className="wallet-card">
                        <div className="wallet-am">
                            <Lottie className="lottie" loop animationData={walletJson} play style={{ width: 80, height: 80}}/>
                            <h3> ₦150,000,000,000.08 </h3>
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
                                        <h5> $30,000 <br /><small> Dallar Wallet </small> </h5>
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
                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img"> <i className="fa fa-angle-double-right"></i> </span></li>
                                        <li> <h5> money for concert.. </h5>
                                            <h6> Transfer &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="credit"> ₦150,000</h4> </li>
                                    </a>
                                </ul>

                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img2"> <i className="fa fa-angle-double-left"></i> </span></li>
                                        <li> <h5> Money for food in... </h5>
                                            <h6> Recieve  &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="debit"> ₦-150,000</h4> </li>
                                    </a>
                                </ul>

                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img"> <i className="fa fa-angle-double-right"></i> </span></li>
                                        <li> <h5> money for concert.. </h5>
                                            <h6> Transfer &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="credit"> ₦150,000</h4> </li>
                                    </a>
                                </ul>

                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img2"> <i className="fa fa-angle-double-left"></i> </span></li>
                                        <li> <h5> Money for food in... </h5>
                                            <h6> Recieve  &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="debit"> ₦-150,000</h4> </li>
                                    </a>
                                </ul>

                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img"> <i className="fa fa-angle-double-right"></i> </span></li>
                                        <li> <h5> money for concert.. </h5>
                                            <h6> Transfer &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="credit"> ₦150,000</h4> </li>
                                    </a>
                                </ul>

                                <ul className="trans clearfix">
                                    <a href="transaction-details.html">
                                        <li><span className="t-img2"> <i className="fa fa-angle-double-left"></i> </span></li>
                                        <li> <h5> Money for food in... </h5>
                                            <h6> Recieve  &nbsp; ~  <small> 2 days ago </small> </h6>
                                        </li>
                                        <li> <h4 className="debit"> ₦-150,000</h4> </li>
                                    </a>
                                </ul>
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