<script lang="ts">
  import Button from 'components/Button'
  import TextArea from 'components/TextArea'
  import { diffByWords, diffByLines } from 'lib/diff'
  import type { Token } from 'lib/diff/types'
  import getExampleTexts from './utils/getExampleTexts'

  let text1 = ''
  let text2 = ''
  let text1Changes: Array<Token> = []
  let text2Changes: Array<Token> = []

  const handleCompareByWords = () => {
    const diff = diffByWords(text1, text2)
    text1Changes = diff.text1Changes
    text2Changes = diff.text2Changes
  }

  const handleCompareByLines = () => {
    const diff = diffByLines(text1, text2)
    text1Changes = diff.text1Changes
    text2Changes = diff.text2Changes
  }

  const handleFiilOutExample = () => {
    const example = getExampleTexts()
    text1 = example.text1
    text2 = example.text2
  }
</script>

<div class="flex items-center gap-3">
  <Button appearance="primary" on:click={handleCompareByWords}>
    Compare by words
  </Button>
  <Button appearance="primary" on:click={handleCompareByLines}>
    Compare by lines
  </Button>
  <Button appearance="secondary" on:click={handleFiilOutExample}>
    Example
  </Button>
</div>
<div class="mt-3 flex justify-center items-center gap-3">
  <TextArea
    className="w-1/2 h-96"
    bind:value={text1}
    placeholder="Type or paste a text"
    withHighlightingChanges
    valueChanges={text1Changes}
  />
  <TextArea
    className="w-1/2 h-96"
    bind:value={text2}
    placeholder="Type or paste a text"
    withHighlightingChanges
    valueChanges={text2Changes}
  />
</div>
