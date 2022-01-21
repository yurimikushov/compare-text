import diff from './diff'
import isPartText1 from './isPartText1'
import isPartText2 from './isPartText2'
import type { Token } from './types'

const tokenize = (text: string) => {
  return text.split('\n')
}

const addLineBreak = (token: Token) => ({
  ...token,
  value: token.value + '\n'
})

const diffByLines = (text1: string, text2: string) => {
  const diffByLines = diff(tokenize(text1), tokenize(text2)).map(addLineBreak)

  return {
    diff: diffByLines,
    text1Changes: diffByLines.filter(isPartText1),
    text2Changes: diffByLines.filter(isPartText2)
  }
}

export default diffByLines
