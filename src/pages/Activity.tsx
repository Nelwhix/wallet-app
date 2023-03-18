export default function Activity() {

    return  <><div className="topBG">
        <div className="container">
            <h2 className="page-title"> Activity </h2>
            <div className="wallet-card">
                <div className="wallet-am text-start">
                    <h3> 4000 </h3>
                    <h6> Total Transactions</h6>

                    <h3 className="gtxt"> 25000 </h3>
                    <h6>Total Credit </h6>

                    <h3 className="rtxt"> 15000</h3>
                    <h6> Total Debit </h6>


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

            <h4 className="inner-title"> All Transactions   </h4>
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
    </div><div className="modal fade" id="transferModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bottom-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Transfer </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-3">
                            <label> Reciever <span className="ast" data-bs-toggle="tooltip" data-bs-placement="top" title="important">*</span> </label>
                            <input type="text" className="form-control fm" placeholder="@username or wallet ID of benefecial" required />
                        </div>
                        <div className="form-group mb-3 text-center">
                            <label> Enter Amount  </label>
                            <input type="text" className="form-control amount" data-type="currency" placeholder="₦1,000,000.00" required pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" />
                        </div>
                        <div className="form-group mb-3 text-center">
                            <button type="button" className="cusbtn ">Transfer</button>
                        </div>
                    </div>

                </div>
            </div>
        </div><div className="modal fade" id="receiveModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bottom-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Receive </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-3">
                            <h4 className="text-center"> Scan </h4>
                        </div>
                        <div className="form-group mb-3 text-center">
                            <img src="images/tutuqr.png" width="200" />
                        </div>

                    </div>
                </div>
            </div>
        </div></>
}