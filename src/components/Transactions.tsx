import { formatMoney, getTimeInterval } from "../helpers"

export default function Transactions({ transactions }: TransProp) {
    const transactionCards = transactions.map(transaction =>
        <ul key={transaction.tnlid} className="trans clearfix">
            <a href="transaction-details.html">
                <li><span className="t-img"> <i className="fa fa-angle-double-right"></i> </span></li>
                <li> <h5> {transaction.title} </h5>
                    <h6> Transfer &nbsp; ~  <small> {getTimeInterval(transaction.added)} </small> </h6>
                </li>
                <li> <h4 className={transaction.type === 1 ? 'credit' : 'debit'}> {formatMoney(1, transaction.value)}</h4> </li>
            </a>
        </ul>
    )

    return <div>
        {transactionCards}
    </div>
}

interface TransProp {
    transactions: Transaction[]
}

interface Transaction {
    title: string,
    tnlid: string,
    added: Date,
    value: number
    type: TransType
}

enum TransType {
    Credit = 1,
    Debit = -1
}