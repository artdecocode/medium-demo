import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import mediumDemo from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await mediumDemo({
      text: this.input,
    })
    return res
  },
  context: Context,
})