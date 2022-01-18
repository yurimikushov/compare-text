import { forwardRef } from 'react'
import cn from 'classnames'
import shouldConcatLeft from './utils/shouldConcatLeft'
import shouldConcatRight from './utils/shouldConcatRight'

const Highlighter = forwardRef(({ className, tokens }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(className, 'max-w-full max-h-[99%] overflow-hidden')}
    >
      {tokens.map(({ added, removed, value }, i) => (
        <span
          key={`${i}:${value}`}
          className={cn('rounded-sm', {
            'bg-green-300': added,
            'bg-red-300': removed,
            'rounded-l-none': shouldConcatLeft(tokens, i),
            'rounded-r-none': shouldConcatRight(tokens, i),
          })}
        >
          {value}
          {value.endsWith('\n') && <br />}
        </span>
      ))}
    </div>
  )
})

export default Highlighter
