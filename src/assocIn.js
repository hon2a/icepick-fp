import * as icepick from 'icepick'
import toPath from 'lodash.topath'

export const assocIn = (path, value) => object => icepick.assocIn(object, toPath(path), value)
