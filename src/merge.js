import * as icepick from 'icepick'

export const merge = (src, resolver) => dest => icepick.merge(dest, src, resolver)
