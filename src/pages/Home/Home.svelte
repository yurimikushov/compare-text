<script lang="ts">
  import texts from 'modules/texts'
  import diff from 'modules/diff'
  import DiffViewer from 'components/DiffViewer'
  import Button from 'components/Button'
  import TextArea from 'components/TextArea'

  const handleCompare = () => {
    diff.buildDiff($texts.text1, $texts.text2)
  }
  const handleFiilInExample = () => {
    texts.fillInExample()
  }

  texts.subscribe(diff.reset)
</script>

{#if $diff.left.length > 0}
  <DiffViewer className="mb-5" diff={$diff} />
{/if}
<div class="flex items-center gap-3">
  <Button appearance="primary" on:click={handleCompare}>Compare</Button>
  <Button appearance="secondary" on:click={handleFiilInExample}>Example</Button>
</div>
<div class="mt-3 flex justify-center items-center gap-3">
  <TextArea
    className="w-1/2 h-96"
    bind:value={$texts.text1}
    placeholder="Type or paste a text"
  />
  <TextArea
    className="w-1/2 h-96"
    bind:value={$texts.text2}
    placeholder="Type or paste a text"
  />
</div>
