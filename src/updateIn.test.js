import { freeze } from 'icepick'

import { updateIn } from './updateIn'

const value = { some: 'property' }
const newValue = { other: 'prop' }

describe('updateIn', () => {
  it('clones value and updates property', () => {
    const original = { value }
    const result = updateIn('value', val => ({ ...val, ...newValue }))(original)
    expect(result).toEqual({ value: { ...value, ...newValue } })
    expect(result).not.toBe(original)
  })

  it('clones value and updates nested property', () => {
    const original = { foo: [, { bar: value }] }
    const result = updateIn('foo[1].bar', val => ({ ...val, ...newValue }))(original)
    expect(result).toEqual({ foo: [, { bar: { ...value, ...newValue } }] })
    expect(result).not.toBe(original)
    expect(result.foo[1]).not.toBe(original.foo[1])
  })

  it("doesn't clone a frozen object on no update", () => {
    const original = freeze({ foo: [, { bar: 'value' }] })
    expect(updateIn('foo[1].bar', val => val)(original)).toBe(original)
  })
})
