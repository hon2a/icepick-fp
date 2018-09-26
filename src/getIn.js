import * as icepick from 'icepick'
import toPath from 'lodash.topath'

export const getIn = path => object => icepick.getIn(object, toPath(path))
