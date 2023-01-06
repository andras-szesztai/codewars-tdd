export function parse(data: string): number[] {
    const result: number[] = []
    if (!data.includes('o')) return result
    data.split('').reduce((acc, command) => {
        if (command === 'o') result.push(acc)
        if (command === 'i') acc++
        if (command === 'd') acc--
        if (command === 's') acc = acc ** 2
        return acc
    }, 0)
    return result
}
