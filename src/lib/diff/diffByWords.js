import diff from './diff'

const tokenize = (text) => {
  return text.replaceAll('\n', '\n ').split(' ')
}

const addWhiteSpace = ({ value, ...rest }) => ({
  ...rest,
  value: value.endsWith('\n') ? value : value + ' ',
})

const diffByWords = (text1, text2) => {
  return diff(tokenize(text1), tokenize(text2)).map(addWhiteSpace)
}

export default diffByWords
