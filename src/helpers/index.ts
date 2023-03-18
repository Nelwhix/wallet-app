import spacetime from "spacetime"

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

export function getTimeInterval(serverDate: Date) {
    let d = spacetime(serverDate)
    let now = spacetime.now()

    let diff = d.diff(now, 'minutes')

    if (diff < 60) {
        return diff + " minutes ago"
    }
    if (diff > 60 && diff < 60 * 24) {
        let h = diff / 60
        return h.toFixed(0) + " hours ago"
    }

    if (diff > 60 * 24) {
        let d = diff / (60 * 24)
        return d.toFixed(0) + " days ago"
    }
}
