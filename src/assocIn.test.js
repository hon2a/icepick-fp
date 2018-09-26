import { freeze } from 'icepick'

import { assocIn } from './assocIn'

const value = { some: 'property' }
const newValue = { other: 'prop' }

describe('assocIn', () => {
  it('clones value and overwrites property', () => {
    const original = { value }
    const result = assocIn('value', newValue)(original)
    expect(result).toEqual({ value: newValue })
    expect(result).not.toBe(original)
  })

  it('clones value and overwrites nested property', () => {
    const original = { foo: [, { bar: value }] }
    const result = assocIn('foo[1].bar', newValue)(original)
    expect(result).toEqual({ foo: [, { bar: newValue }] })
    expect(result).not.toBe(original)
    expect(result.foo[1]).not.toBe(original.foo[1])
  })

  it("doesn't clone a frozen object on no update", () => {
    const original = freeze({ foo: [, { bar: 'value' }] })
    expect(assocIn('foo[1].bar', 'value')(original)).toBe(original)
  })
})
