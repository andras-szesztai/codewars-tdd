import { towerBuilder } from '.'

describe('towerBuilder', () => {
    it('build correct tower', () => {
        expect(towerBuilder(1)).toEqual(['*'])
        expect(towerBuilder(2)).toEqual([' * ', '***'])
        expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****'])
    })

    it('returns empty array for floors equal to or below 0', () => {
        expect(towerBuilder(0)).toEqual([])
        expect(towerBuilder(-1)).toEqual([])
    })
})
