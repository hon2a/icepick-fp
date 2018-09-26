import * as icepick from 'icepick'
import toPath from 'lodash.topath'

export const updateIn = (path, updater) => object => icepick.updateIn(object, toPath(path), updater)
