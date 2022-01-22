<script lang="ts">
  import texts from 'modules/texts'
  import diff from 'modules/diff'
  import Button from 'components/Button'
  import TextArea from 'components/TextArea'

  const handleCompareByWords = () => {
    diff.diffByWords($texts.text1, $texts.text2)
  }

  const handleCompareByLines = () => {
    diff.diffByLines($texts.text1, $texts.text2)
  }

  const handleFiilInExample = () => {
    texts.fillInExample()
  }
</script>

<div class="flex items-center gap-3">
  <Button appearance="primary" on:click={handleCompareByWords}>
    Compare by words
  </Button>
  <Button appearance="primary" on:click={handleCompareByLines}>
    Compare by lines
  </Button>
  <Button appearance="secondary" on:click={handleFiilInExample}>Example</Button>
</div>
<div class="mt-3 flex justify-center items-center gap-3">
  <TextArea
    className="w-1/2 h-96"
    bind:value={$texts.text1}
    placeholder="Type or paste a text"
    withHighlightingChanges
    valueChanges={$diff.text1Changes}
  />
  <TextArea
    className="w-1/2 h-96"
    bind:value={$texts.text2}
    placeholder="Type or paste a text"
    withHighlightingChanges
    valueChanges={$diff.text2Changes}
  />
</div>
