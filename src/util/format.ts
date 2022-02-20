export function toKilo(value: number): string {
    if (value < 1000) {
        return value.toString()
    } else if (value < 1000000) {
        return (value / 1000).toFixed(1) + "K"
    } else {
        return (value / 1000000).toFixed(1) + "M"
    }
}

export function toRMB(value: number): string {
    return "¥" + value
}
