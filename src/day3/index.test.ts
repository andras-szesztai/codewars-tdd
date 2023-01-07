import { multiplicationTable } from '.'

describe('multiplicationTable', () => {
    it('should return an empty array for number 0 or below', () => {
        expect(multiplicationTable(0)).toEqual([])
        expect(multiplicationTable(-1)).toEqual([])
    })
    it('should return a 2x2 array', () => {
        const result = multiplicationTable(2)
        expect(result).toEqual([
            [1, 2],
            [2, 4],
        ])
    })
    it('should return a 3x3 array', () => {
        const result = multiplicationTable(3)
        expect(result).toEqual([
            [1, 2, 3],
            [2, 4, 6],
            [3, 6, 9],
        ])
    })
    it('should return a 4x4 array', () => {
        const result = multiplicationTable(4)
        expect(result).toEqual([
            [1, 2, 3, 4],
            [2, 4, 6, 8],
            [3, 6, 9, 12],
            [4, 8, 12, 16],
        ])
    })
    it('should return a 5x5 array', () => {
        const result = multiplicationTable(5)
        expect(result).toEqual([
            [1, 2, 3, 4, 5],
            [2, 4, 6, 8, 10],
            [3, 6, 9, 12, 15],
            [4, 8, 12, 16, 20],
            [5, 10, 15, 20, 25],
        ])
    })
})
