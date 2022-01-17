import cn from 'classnames'

const TextArea = ({ className, onChange, ...props }) => {
  const handleChange = (e) => {
    if (!onChange) {
      return
    }

    onChange(e.target.value)
  }

  return (
    <textarea
      {...props}
      className={cn(
        className,
        'p-3 w-full shadow-sm',
        'rounded-md border border-gray-300',
        'outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
      )}
      onChange={handleChange}
    />
  )
}

export default TextArea
