const shouldConcatLeft = (tokens, i) =>
  (tokens[i].added &&
    i > 0 &&
    !tokens[i - 1].value.endsWith('\n') &&
    tokens[i - 1].added) ||
  (tokens[i].removed &&
    i > 0 &&
    !tokens[i - 1].value.endsWith('\n') &&
    tokens[i - 1].removed)

export default shouldConcatLeft
