import { freeze } from 'icepick'

import { dissocIn } from './dissocIn'

const value = { some: 'property' }

describe('dissocIn', () => {
  it('clones value and removes property', () => {
    const original = { value, other: 'prop that stays' }
    const result = dissocIn('value')(original)
    expect(result).toEqual({ other: original.other })
    expect(result).not.toBe(original)
  })

  it('clones value and removes nested property', () => {
    const original = { foo: [, { bar: value, other: 'prop that stays' }] }
    const result = dissocIn('foo[1].bar')(original)
    expect(result).toEqual({ foo: [, { other: original.foo[1].other }] })
    expect(result).not.toBe(original)
    expect(result.foo[1]).not.toBe(original.foo[1])
  })

  it("doesn't clone a frozen object on no update", () => {
    const original = freeze({ foo: [, { bar: 'value' }] })
    expect(dissocIn('foo[1].nonexistentProperty')(original)).toBe(original)
  })
})
