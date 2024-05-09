const moneyFormat = (str) => {
    if (!str) return '0.00'
    return str.toLocaleString('en-US', {maximumFractionDigits: 0}).replace(/,/g, ' ')
}

export default moneyFormat