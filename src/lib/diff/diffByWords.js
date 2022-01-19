import diff from './diff'

const tokenize = (text) => {
  return text.replaceAll('\n', '\n ').split(' ')
}

const diffByWords = (text1, text2) => {
  return diff(tokenize(text1), tokenize(text2))
}

export default diffByWords
