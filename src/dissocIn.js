import * as icepick from 'icepick'
import toPath from 'lodash.topath'
import initial from 'lodash.initial'
import last from 'lodash.last'

export const dissocIn = path => object => {
  const normalPath = toPath(path)
  if (icepick.getIn(object, normalPath) === undefined) {
    return object
  }
  const parentPath = initial(normalPath)
  const key = last(normalPath)
  if (parentPath.length === 0) {
    return icepick.dissoc(object, key)
  }
  return icepick.updateIn(object, parentPath, parent => icepick.dissoc(parent, key))
}
