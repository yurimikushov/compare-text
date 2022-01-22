import type { Token } from 'lib/diff/types'

const shouldConcatRight = (tokens: Array<Token>, i: number) =>
  (tokens[i].added &&
    tokens.length > i + 1 &&
    !tokens[i].value.endsWith('\n') &&
    tokens[i + 1].added) ||
  (tokens[i].removed &&
    tokens.length > i + 1 &&
    !tokens[i].value.endsWith('\n') &&
    tokens[i + 1].removed)

export default shouldConcatRight
