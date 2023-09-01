/**
 * @description: 防抖
 * @param {Function} fn
 * @param {number} delay
 * @return {*}
 */
export const debounce = (fn: Function, delay: number) => {
  let timer: any = null
  return (e: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(e)
    }, delay)
  }
}

/**
 * @description: 节流
 * @param {Function} func
 * @param {number} delay
 * @return {*}
 */
export const throttle = (func: Function, delay: number) => {
  let timer: any = null
  return (...args: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, delay)
    }
  }
}
