import cn from 'classnames'

const Layout = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        className,
        'p-10 min-h-screen bg-gradient-to-br from-blue-50 to-white'
      )}
    >
      <div className='mx-auto max-w-screen-xl w-full h-full'>{children}</div>
    </div>
  )
}

export default Layout
