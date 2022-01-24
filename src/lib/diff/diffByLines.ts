import diff from './diff'
import type { Token } from './types'

const tokenize = (text: string) => {
  return text.split('\n')
}

const addLineBreak = (token: Token) => ({
  ...token,
  value: token.value + '\n'
})

const diffByLines = (text1: string, text2: string) => {
  return diff(tokenize(text1), tokenize(text2)).map(addLineBreak)
}

export default diffByLines
