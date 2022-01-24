import type { Token } from 'lib/diff/types'

type Diff = {
  left: Array<Line>
  right: Array<Line>
}

type Line = Omit<Token, 'value'> & {
  dummy: boolean
  childs: Array<Token>
}

export type { Diff, Line }
