import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  // 函数入参时,最起码要主动跑出期望值异常,最好是处理各种边界情况
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  // 循环时,能用while就别用for,要少2步操作啊
  while (index < length) {
    // 计算一下 下标添加和push的时间差
    // 时间几乎一样,优先使用push,这里可能是浏览器兼容问题
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
