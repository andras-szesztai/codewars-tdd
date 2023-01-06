import { humanReadable } from "."

describe('humanReadable', () => {
  it('takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)', () => {
    expect(humanReadable(0)).toEqual("00:00:00")
    expect(humanReadable(5)).toEqual("00:00:05")
    expect(humanReadable(60)).toEqual("00:01:00")
    expect(humanReadable(86399)).toEqual("23:59:59")
    expect(humanReadable(359999)).toEqual("99:59:59")
  })
  it('returns an empty string if the input is negative', () => {
      expect(humanReadable(-1)).toEqual('')
  })
})