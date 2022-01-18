import diff from './diff'

const diffByLines = (text1, text2) => {
  return diff(text1.split('\n'), text2.split('\n')).map(
    ({ value, ...rest }) => ({
      ...rest,
      value: value + '\n',
    })
  )
}

export default diffByLines
