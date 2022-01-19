import { useCallback, useEffect, useRef } from 'react'

const useTextAreaWithHighlighter = (valueChanges, onChange) => {
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

  return {
    textAreaRef,
    highlighterRef,
    handleChange,
  }
}

export default useTextAreaWithHighlighter
