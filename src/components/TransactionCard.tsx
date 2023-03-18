export default function TransactionCard({ data }: TransData) {

    return <ul className="trans clearfix">
        <a href="transaction-details.html">
            <li><span className="t-img"> <i className="fa fa-angle-double-right"></i> </span></li>
            <li> <h5> money for concert.. </h5>
                <h6> Transfer &nbsp; ~  <small> 2 days ago </small> </h6>
            </li>
            <li> <h4 className="credit"> ₦150,000</h4> </li>
        </a>
    </ul>

}

type TransData = {
    data: never
}