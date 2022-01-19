import cn from 'classnames'

const Button = ({ className, appearance = 'primary', children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        'p-2 md:py-2 md:px-4',
        'text-xs xs:text-base font-medium rounded-md',
        'border shadow-sm outline-none',
        'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        {
          'text-white bg-indigo-600 hover:bg-indigo-700 border-transparent':
            appearance === 'primary',
          'text-gray-600 bg-white hover:bg-gray-50 border-gray-300':
            appearance === 'secondary',
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
