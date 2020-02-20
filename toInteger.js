/* pass */
import toFinite from './toFinite.js'

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  const result = toFinite(value)
  const remainder = result % 1
  // 因为可能是负数,所以用减法是最安全的,效率最高的
  // 否则负数用ceil 正数用floor就得多加判断了
  // 负数取余也是负数 减法运算相当于是加

  // 取整数的时候,能用-号,就别用Math函数
  return remainder ? result - remainder : result
}

export default toInteger
