import diff from './diff'
import isPartText1 from './isPartText1'
import isPartText2 from './isPartText2'

const tokenize = (text) => {
  return text.split('\n')
}

const addLineBreak = ({ value, ...rest }) => ({
  ...rest,
  value: value + '\n',
})

const diffByLines = (text1, text2) => {
  const diffByLines = diff(tokenize(text1), tokenize(text2)).map(addLineBreak)

  return {
    diff: diffByLines,
    text1Changes: diffByLines.filter(isPartText1),
    text2Changes: diffByLines.filter(isPartText2),
  }
}

export default diffByLines
