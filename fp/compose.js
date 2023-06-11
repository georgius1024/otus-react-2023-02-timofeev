export const compose = (...fns) => fns.reduceRight((accum, fn) => x => fn(accum(x)))
