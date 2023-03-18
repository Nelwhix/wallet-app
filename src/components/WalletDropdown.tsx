import { formatMoney } from "../helpers"

export default function WalletDropDown({ data }: WalletProp) {
    const walletItems = data.map(wallet =>
        <li key={wallet.wlid}>
            <a className="dropdown-item" href="#">
                <h5> {formatMoney(wallet.currency, wallet.balance)} <br /><small> {wallet.name} Wallet </small> </h5>
            </a>
        </li>
    )

    return <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {walletItems}
    </ul>
}

type WalletProp = {
    data: Array<Wallet>
}

interface Wallet {
    currency: number,
    name: string,
    wlid: string,
    balance: number
}