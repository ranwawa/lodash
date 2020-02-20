/* pass */
import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  // typeof比toString的效率高4倍,所以这里优先使用typeof 可通过console.time进行判断
  // 虽然无法直接通过原始数据类型即Symbol创建包装对象,但可以通过Object(symbol)来创建包装对象
  // 所以也有可能typeof 会出现为object
  // 判断类型时,能用typeof就别用toString
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol
