import { freeze } from 'icepick'
import { merge } from './merge'

describe('merge', () => {
  it('merges objects (deep)', () => {
    expect(merge({ a: { c: 'C-mod', g: 'G' }, f: 'F' })({ a: { c: 'C', d: 'D' }, b: 'B' })).toEqual({
      a: { c: 'C-mod', d: 'D', g: 'G' },
      b: 'B',
      f: 'F'
    })
  })

  it("doesn't create new object when the contents are unchanged", () => {
    const dest = freeze({ a: { c: 'C', d: 'D' }, b: 'B' })
    const merged = merge({ a: { d: 'D' } })(dest)
    expect(merged).toBe(dest)
  })
})
