function makeArray(size: number): number[] {
    return [...Array(size)]
}

export function multiplicationTable(size: number): number[][] {
    if (size <= 0) return []
    return makeArray(size).map((_, rowIdx) =>
        makeArray(size).map((_, columnIdx) => (rowIdx + 1) * (columnIdx + 1))
    )
}
