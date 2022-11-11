/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-spread */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(fn: Function, time: number) {
  let timOut: any = null
  return function (...args: any) {
    if (timOut) {
      clearTimeout(timOut)
    }
    timOut = setTimeout(() => {
      fn.apply(null, args)
      timOut = null
    }, time)
  }
}
