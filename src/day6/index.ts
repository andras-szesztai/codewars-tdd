function floor(floorNumber: number) {
    return Array(floorNumber).fill(1)
}

export function pyramidBuilder(numberOfFloors: number): number[][] {
    if (numberOfFloors <= 0) return []
    const result = [...Array(numberOfFloors)].map((_, i) => floor(i + 1))
    return result
}
