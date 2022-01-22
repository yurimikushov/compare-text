import type { Token } from './types'

const isPartText1 = ({ added, removed }: Token) =>
  removed || (!added && !removed)

export default isPartText1
