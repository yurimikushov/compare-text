import type { Token } from './types'

const isPartText2 = ({ added, removed }: Token) => added || (!added && !removed)

export default isPartText2
