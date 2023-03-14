export function formatMoney(currency: number, value: number) {
    if (currency == 1) {
        let naira = new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        })
        let nValue = (value/ 100)
        return naira.format(nValue)
    }
    if (currency == 2) {
        return `$${(value / 100).toLocaleString()}`
    }
    if (currency == 4) {
        return `C${value}`
    }

    if (currency == 8) {
        return `value`
    }

    return ""
}
