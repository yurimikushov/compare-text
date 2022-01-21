export type Token = {
  added: boolean
  removed: boolean
  value: string
}

export type TokenType = 'added' | 'removed' | 'unchanged'
