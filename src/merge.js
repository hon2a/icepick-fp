import * as icepick from 'icepick'

export const merge = src => dest => icepick.merge(dest, src)
