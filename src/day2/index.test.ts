import { parse } from '.'

describe('parse', () => {
    it('should return numbers in array equal to the number "o" in string passed in', () => {
        expect(parse('')).toEqual([])
        expect(parse('iiiiasdaqwdsawqasii')).toEqual([])
        expect(parse('o')).toEqual([0])
        expect(parse('ooo')).toEqual([0, 0, 0])
    })
    it('should increment the number in the array by 1 for each "i" in the string', () => {
        expect(parse('io')).toEqual([1])
        expect(parse('ioioio')).toEqual([1, 2, 3])
    })
    it('should decrement the number in the array by 1 for each "d" in the string', () => {
        expect(parse('do')).toEqual([-1])
        expect(parse('dododod')).toEqual([-1, -2, -3])
        expect(parse('diodoiodo')).toEqual([0, -1, 0, -1])
    })
    it('should square the number in the array for each "s" in the string', () => {
        expect(parse('so')).toEqual([0])
        expect(parse('siosiosio')).toEqual([1, 2, 5])
        expect(parse('siosiosiiido')).toEqual([1, 2, 6])
    })
    it('should parse commands correctly', () => {
        expect(parse('iiisdoso')).toEqual([8, 64])
        expect(parse('iiisxxxdoso')).toEqual([8, 64])
    })
})
