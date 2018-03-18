/**
 * Created by zhangyong on 2017/8/30.
 */


export const functions = {}

/**
 * 默认条件函数执行
 * @returns {boolean}
 * @constructor
 */
functions.TURE = () => true

/**
 * 默认条件函数不执行
 * @returns {boolean}
 * @constructor
 */
functions.FALSE = () => false

export default {
  functions
}