import { getIn } from './getIn'

const value = { some: 'property' }

describe('getIn', () => {
  it('creates property retriever', () => {
    expect(getIn('value')({ value })).toEqual(value)
  })

  it('retrieves a nested property', () => {
    expect(getIn('foo[1].bar')({ foo: [, { bar: value }] })).toEqual(value)
  })
})
