import diff from './diff'

const tokenize = (text: string) => {
  return text.split('')
}

const diffByChars = (text1: string, text2: string) => {
  return diff(tokenize(text1), tokenize(text2))
}

export default diffByChars
