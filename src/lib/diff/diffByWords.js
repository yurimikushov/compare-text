import diff from './diff'
import isPartText1 from './isPartText1'
import isPartText2 from './isPartText2'
import markRightSideWhiteSpaceAsChanged from './markRightSideWhiteSpaceAsChanged'

const tokenize = (text) => {
  // Tokenizing can be optimized by combining 'replaceAll()',
  // 'split()' and 'flatMap()' in one loop
  return text
    .replaceAll('\n', '\n ')
    .split(' ')
    .flatMap((word) => {
      if (word.endsWith('\n')) {
        return word
      }

      return [word, ' ']
    })
}

const diffByWords = (text1, text2) => {
  const diffByWords = diff(tokenize(text1), tokenize(text2))

  return {
    diff: diffByWords,
    text1Changes: markRightSideWhiteSpaceAsChanged(
      diffByWords.filter(isPartText1)
    ),
    text2Changes: markRightSideWhiteSpaceAsChanged(
      diffByWords.filter(isPartText2)
    ),
  }
}

export default diffByWords
