import { freeze } from 'icepick'
import { assign } from './assign'

describe('assign', () => {
  it('merges objects (shallow)', () => {
    expect(assign({ a: { e: 'E' }, d: 'D' })({ a: { c: 'C' }, b: 'B' })).toEqual({
      a: { e: 'E' },
      b: 'B',
      d: 'D'
    })
  })

  it("doesn't create new object when the contents are unchanged", () => {
    const a = freeze({ d: 'D' })
    const dest = freeze({ a, b: 'B', c: 'C' })
    const merged = assign({ a, c: 'C' })(dest)
    expect(merged).toBe(dest)
  })
})
