import cn from 'classnames'
import Highlighter from './Highlighter'
import TextArea from './BaseTextArea'
import { useCallback, useEffect, useRef } from 'react'

const TextAreaWithHighlighter = ({
  className,
  value,
  valueChanges,
  onChange,
  ...props
}) => {
  const textAreaRef = useRef(null)
  const highlighterRef = useRef(null)

  useEffect(() => {
    textAreaRef.current.addEventListener('scroll', handleScroll)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      textAreaRef.current.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleScroll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueChanges])

  const handleScroll = useCallback(() => {
    highlighterRef.current.scrollTop = textAreaRef.current.scrollTop
  }, [])

  const handleChange = (value) => {
    handleScroll()
    onChange(value)
  }

  return (
    <div className={cn(className, 'relative bg-white rounded-md')}>
      <TextArea
        {...props}
        ref={textAreaRef}
        className={cn('absolute top-0 left-0 z-[2]', 'bg-transparent')}
        value={value}
        onChange={handleChange}
      />
      <Highlighter
        ref={highlighterRef}
        className={cn(
          'absolute top-0 left-0 z-[1]',
          'mt-[2px] ml-[1px] p-3',
          'text-transparent pointer-events-none'
        )}
        tokens={valueChanges}
      />
    </div>
  )
}

export default TextAreaWithHighlighter
