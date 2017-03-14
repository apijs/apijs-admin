/**
 * @file apijs-admin
 * @author xieyaowu <fe.xiaowu@gmail.con>
 */

var path = require('path');

/**
 * 获取路径
 *
 * @param {string} name 获取的目录, static静态目录为dist
 * @return {string}
 */
module.exports.getPath = function (name) {
    return path.resolve(__dirname, name === 'static' ? './dist/' : './');
};