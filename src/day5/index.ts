function spaces(nFloors: number, index: number) {
    return ' '.repeat(nFloors - index - 1)
}

function stars(index: number) {
    return '*'.repeat(index * 2 + 1)
}

function floor(nFloors: number, index: number) {
    return `${spaces(nFloors, index)}${stars(index)}${spaces(nFloors, index)}`
}

export function towerBuilder(nFloors: number): string[] {
    if (nFloors <= 0) return []
    const tower = [...Array(nFloors)].map((_, index) => floor(nFloors, index))
    return tower
}
