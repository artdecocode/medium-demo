import { c } from 'erte'

/**
 * Hello World.
 * @param {!_mediumDemo.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function mediumDemo(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('@artdeco/medium-demo called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('..').Config} _mediumDemo.Config
 */
