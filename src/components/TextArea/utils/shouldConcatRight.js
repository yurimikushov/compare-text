const shouldConcatRight = (tokens, i) =>
  (tokens[i].added &&
    tokens.length > i + 1 &&
    !tokens[i].value.endsWith('\n') &&
    tokens[i + 1].added) ||
  (tokens[i].removed &&
    tokens.length > i + 1 &&
    !tokens[i].value.endsWith('\n') &&
    tokens[i + 1].removed)

export default shouldConcatRight
