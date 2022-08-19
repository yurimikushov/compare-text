import type { Token } from 'lib/diff/types'

const isAddedWhiteSpace = (index: number, tokens: Array<Token>) => {
  if (tokens[index].value !== ' ') {
    return false
  }

  if (index === 0 || index === tokens.length - 1) {
    return false
  }

  return tokens[index - 1].added && tokens[index + 1].added
}

export default isAddedWhiteSpace
