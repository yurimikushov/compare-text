import type { Token } from 'lib/diff/types'

const isRemovedWhiteSpace = (index: number, tokens: Array<Token>) => {
  if (tokens[index].value !== ' ') {
    return false
  }

  if (index === 0 || index === tokens.length - 1) {
    return false
  }

  return tokens[index - 1].removed && tokens[index + 1].removed
}

export default isRemovedWhiteSpace
