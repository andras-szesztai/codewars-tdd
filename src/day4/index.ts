export function findOutlier(integers: number[]): number | null {
    const evens: number[] = []
    const odds: number[] = []
    integers.every((n) => {
        n % 2 === 0 ? evens.push(n) : odds.push(n)
        return !(
            (odds.length === 1 && evens.length > 1) ||
            (evens.length === 1 && odds.length > 1)
        )
    })
    if (!evens.length || !odds.length) return null
    return evens.length === 1 ? evens[0] : odds[0]
}
