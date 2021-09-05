const path = require('path');
const rollupResolvePlugin = require('rollup-plugin-node-resolve');
// const rollupBuiltinsPlugin = require('rollup-plugin-node-builtins');
const rollupBabel = require('rollup-plugin-babel');
const rollupCommonJsPlugin = require('rollup-plugin-commonjs');
const rollupJson = require('@rollup/plugin-json');

function getPath(pathName) {
  return path.resolve(__dirname, pathName);
}

module.exports = {
  /**
   * 入口文件
   * @param input
   */
  input: getPath('../src/index.js'),

  /**
   * 输出文件
   * @param output
   */
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'jx3-dps-rank-server',
  },

  /**
   * 插件列表
   * @param plugins
   */
  plugins: [
    /**
     * rollup 解析代码中依赖的 node_modules
     * @param rollupResolvePlugin
     */
    // rollupResolvePlugin(),
    /**
     * rollup 解析 commonjs 语法的 import export
     * @param rollupCommonJsPlugin
     */
    rollupCommonJsPlugin(),
    /**
     * babel 转义
     * @param rollupBabel
     */
    // rollupBabel(),
    // rollupJson(),
  ],
};
