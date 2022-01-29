<script lang="ts">
  import texts, { TEXT_MAX_LENGTH } from 'modules/texts'
  import diff from 'modules/diff'
  import DiffViewer from 'components/DiffViewer'
  import Button from 'components/Button'
  import TextArea from 'components/TextArea'

  const handleCompare = () => {
    diff.buildDiff($texts.text1, $texts.text2)
  }
  const handleFillInExample = () => {
    texts.fillInExample()
    handleCompare()
  }
</script>

<div class="flex justify-end">
  <Button appearance="secondary" on:click={handleFillInExample}>
    Show example
  </Button>
</div>
{#if $diff.left.length > 0}
  <DiffViewer className="my-3" diff={$diff} />
{/if}
<div class="mt-3 flex justify-center items-center gap-3">
  <TextArea
    className="w-1/2 h-80"
    bind:value={$texts.text1}
    placeholder="Type or paste a text"
    maxLength={TEXT_MAX_LENGTH}
  />
  <TextArea
    className="w-1/2 h-80"
    bind:value={$texts.text2}
    placeholder="Type or paste a text"
    maxLength={TEXT_MAX_LENGTH}
  />
</div>
<div class="mt-3 flex justify-center">
  <Button appearance="primary" on:click={handleCompare}>Compare</Button>
</div>
