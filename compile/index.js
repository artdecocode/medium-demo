const { _mediumDemo } = require('./medium-demo')

/**
 * Hello World.
 * @param {!_mediumDemo.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function mediumDemo(config) {
  return _mediumDemo(config)
}

module.exports = mediumDemo

/* typal types/index.xml namespace */
/**
 * @typedef {_mediumDemo.Config} Config `＠record` Options for the program.
 * @typedef {Object} _mediumDemo.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
