import BaseTextArea from './BaseTextArea'
import TextAreaWithHighlighter from './TextAreaWithHighlighter'

const TextArea = ({ withHighlightingChanges, valueChanges, ...props }) => {
  if (!withHighlightingChanges) {
    return <BaseTextArea {...props} />
  }

  return <TextAreaWithHighlighter {...props} valueChanges={valueChanges} />
}

export default TextArea
