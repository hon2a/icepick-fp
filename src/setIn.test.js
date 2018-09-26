import { assocIn } from './assocIn'
import { setIn } from './setIn'

describe('setIn', () => {
  it('is just an alias for `assocIn`', () => {
    expect(setIn).toBe(assocIn)
  })
})
