import { freeze } from 'icepick'
import { merge } from './merge'

const dest = freeze({ a: { c: 'C', d: 'D' }, b: 'B' })

describe('merge', () => {
  it('merges objects (deep)', () => {
    expect(merge({ a: { c: 'C-mod', g: 'G' }, f: 'F' })(dest)).toEqual({
      a: { c: 'C-mod', d: 'D', g: 'G' },
      b: 'B',
      f: 'F'
    })
  })

  it("doesn't create new object when the contents are unchanged", () => {
    const merged = merge({ a: { d: 'D' } })(dest)
    expect(merged).toBe(dest)
  })

  it('supports custom resolver', () => {
    const resolver = (targetVal, sourceVal, key) => (key === 'c' ? `custom-${sourceVal}-${targetVal}` : sourceVal)
    expect(merge({ a: { c: 'new', g: 'G' }, f: 'F' }, resolver)(dest)).toEqual({
      a: { c: 'custom-new-C', d: 'D', g: 'G' },
      b: 'B',
      f: 'F'
    })
  })
})
