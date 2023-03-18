import { useState, useEffect } from "react"
import Transactions from "../components/Transactions"

export default function Activity() {
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")))
    const [creditCount, setCreditCount] = useState(0)
    const [debCount, setDebCount] = useState(0)

    useEffect(() => {
        let cred = 0
        let deb = 0
        for (let field of transactions) {
            if (field.type === 1) {
                cred++
            } else {
                deb++
            }
        }

        setCreditCount(cred)
        setDebCount(deb)
    })

    return  <><div className="topBG">
        <div className="container">
            <h2 className="page-title"> Activity </h2>
            <div className="wallet-card">
                <div className="wallet-am text-start">
                    <h3> {transactions.length} </h3>
                    <h6> Total Transactions</h6>

                    <h3 className="gtxt"> {creditCount} </h3>
                    <h6>Total Credit </h6>

                    <h3 className="rtxt"> {debCount}</h3>
                    <h6> Total Debit </h6>


                </div>
            </div>

            <h4 className="inner-title"> All Transactions   </h4>
            <div className="page-content">
                        <div className="transactions">
                            <div className="clearfix">
                                <Transactions transactions={transactions} />
                            </div>
                        </div>
                    </div>
        </div>
        </div></>
}