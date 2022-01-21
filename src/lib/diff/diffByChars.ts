import diff from './diff'
import isPartText1 from './isPartText1'
import isPartText2 from './isPartText2'

const tokenize = (text: string) => {
  return text.split('')
}

const diffByChars = (text1: string, text2: string) => {
  const diffByWords = diff(tokenize(text1), tokenize(text2))

  return {
    diff: diffByWords,
    text1Changes: diffByWords.filter(isPartText1),
    text2Changes: diffByWords.filter(isPartText2)
  }
}

export default diffByChars
