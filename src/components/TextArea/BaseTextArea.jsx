import { forwardRef } from 'react'
import cn from 'classnames'

const TextArea = forwardRef(({ className, onChange, ...props }, ref) => {
  const handleChange = (e) => {
    if (!onChange) {
      return
    }

    onChange(e.target.value)
  }

  return (
    <textarea
      {...props}
      ref={ref}
      className={cn(
        className,
        'w-full h-full p-3 shadow-sm resize-none',
        'rounded-md border border-gray-300',
        'outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
      )}
      onChange={handleChange}
    />
  )
})

export default TextArea
