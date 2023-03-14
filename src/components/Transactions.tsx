import TransactionCard from "./TransactionCard"

export default function Transactions({ transactions }: TransProp) {
    const trans = transactions.map(transaction => {
        <TransactionCard />
    })

    return <div>
        {trans}
    </div>
}

type TransProp = {
   transactions: []
}