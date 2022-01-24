import buildLCS from './buildLCS'
import type { Token } from './types'

type TokenType = 'added' | 'removed' | 'unchanged'

const token = (type: TokenType, value: string): Token => ({
  added: type === 'added',
  removed: type === 'removed',
  unchanged: type === 'unchanged',
  value
})

const added = (value: string) => token('added', value)
const removed = (value: string) => token('removed', value)
const unchanged = (value: string) => token('unchanged', value)

const diff = (tokens1: Array<string>, tokens2: Array<string>) => {
  const result: Array<Token> = []

  const lcs = buildLCS(tokens1, tokens2)

  let i = tokens1.length
  let j = tokens2.length

  while (i !== 0 || j !== 0) {
    if (i === 0) {
      result.push(added(tokens2[j - 1]))
      j--
    } else if (j === 0) {
      result.push(removed(tokens1[i - 1]))
      i--
    } else if (tokens1[i - 1] === tokens2[j - 1]) {
      result.push(unchanged(tokens1[i - 1]))
      i--
      j--
    } else if (lcs[i - 1][j] <= lcs[i][j - 1]) {
      result.push(added(tokens2[j - 1]))
      j--
    } else {
      result.push(removed(tokens1[i - 1]))
      i--
    }
  }

  return result.reverse()
}

export default diff
