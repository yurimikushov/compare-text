import { forwardRef } from 'react'
import cn from 'classnames'

const Highlighter = forwardRef(({ className, tokens }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(className, 'max-w-full max-h-[99%] overflow-hidden')}
    >
      {tokens.map(({ added, removed, value }, i) => (
        <span
          key={`${i}:${value}`}
          className={cn('p-px rounded-sm', {
            'bg-green-300': added,
            'bg-red-300': removed,
          })}
        >
          {value}
          <br />
        </span>
      ))}
    </div>
  )
})

export default Highlighter
