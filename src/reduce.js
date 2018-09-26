import lodashReduce from 'lodash.reduce'

export const reduce = (reducer, value) => collection =>
  lodashReduce(collection, (acc, ...args) => reducer(...args)(acc), value)
