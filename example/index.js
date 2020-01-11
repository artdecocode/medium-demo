import mediumDemo from '../src'

(async () => {
  const res = await mediumDemo({
    text: 'example',
  })
  console.log(res)
})()