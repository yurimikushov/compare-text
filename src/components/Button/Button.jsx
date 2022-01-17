import cn from 'classnames'

const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        'py-2 px-4 text-sm',
        'font-medium text-white',
        'bg-indigo-600 hover:bg-indigo-700 rounded-md',
        'border border-transparent shadow-sm',
        'outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
    >
      {children}
    </button>
  )
}

export default Button
