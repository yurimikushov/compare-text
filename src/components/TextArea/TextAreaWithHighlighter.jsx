import cn from 'classnames'
import useTextAreaWithHighlighter from './hooks/useTextAreaWithHighlighter'
import TextArea from './BaseTextArea'
import Highlighter from './Highlighter'

const TextAreaWithHighlighter = ({
  className,
  value,
  valueChanges,
  onChange,
  ...props
}) => {
  const { textAreaRef, highlighterRef, handleChange } =
    useTextAreaWithHighlighter(valueChanges, onChange)

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
          'mt-px ml-px p-3',
          'text-transparent pointer-events-none'
        )}
        tokens={valueChanges}
      />
    </div>
  )
}

export default TextAreaWithHighlighter
