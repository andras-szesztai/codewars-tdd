import { pyramidBuilder } from '.'

describe('pyramidBuilder', () => {
    it('build correct pyramid', () => {
        expect(pyramidBuilder(1)).toEqual([[1]])
        expect(pyramidBuilder(2)).toEqual([[1], [1, 1]])
        expect(pyramidBuilder(3)).toEqual([[1], [1, 1], [1, 1, 1]])
    })
    it('returns empty array for 0 or less', () => {
        expect(pyramidBuilder(0)).toEqual([])
        expect(pyramidBuilder(-1)).toEqual([])
        expect(pyramidBuilder(-2)).toEqual([])
    })
})
