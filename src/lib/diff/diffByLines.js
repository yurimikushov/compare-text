import diff from './diff'

const tokenize = (text) => {
  return text.split('\n')
}

const addLineBreak = ({ value, ...rest }) => ({
  ...rest,
  value: value + '\n',
})

const diffByLines = (text1, text2) => {
  return diff(tokenize(text1), tokenize(text2)).map(addLineBreak)
}

export default diffByLines
