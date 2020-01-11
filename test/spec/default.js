import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import mediumDemo from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof mediumDemo, 'function')
  },
  async 'calls package without error'() {
    await mediumDemo()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await mediumDemo({
      text,
    })
    ok(res, text)
  },
}

export default T