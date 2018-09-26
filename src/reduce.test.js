import { setIn } from './setIn'
import { reduce } from './reduce'

describe('reduce', () => {
  const reducer = reduce((val, key) => setIn(val, key), {})

  it('reduces array', () => {
    expect(reducer(['a', 'b'])).toEqual({ a: 0, b: 1 })
  })

  it('reduces object', () => {
    expect(reducer({ number: 42, string: 'abc' })).toEqual({ 42: 'number', abc: 'string' })
  })
})
