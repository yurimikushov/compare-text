<script lang="ts">
  import texts, { TEXT_MAX_LENGTH } from 'modules/texts'
  import diff from 'modules/diff'
  import DiffViewer from 'components/DiffViewer'
  import Button from 'components/Button'
  import TextField from './TextField.svelte'

  const handleCompare = () => {
    diff.buildDiff($texts.text1, $texts.text2)
  }

  const handleSwitchTexts = () => {
    texts.switchTexts()

    const hasDiff = $diff.left.length > 0

    if (hasDiff) {
      handleCompare()
    }
  }

  const handleFillInExample = () => {
    texts.fillInExample()
    handleCompare()
  }
</script>

<div class="flex justify-end gap-2">
  <Button appearance="secondary" on:click={handleSwitchTexts}>
    Switch texts
  </Button>
  <Button appearance="secondary" on:click={handleFillInExample}>
    Show example
  </Button>
</div>
{#if $diff.left.length > 0}
  <DiffViewer className="my-3" diff={$diff} />
{/if}
<div class="mt-3 flex justify-center items-center gap-3">
  <TextField
    className="w-1/2 h-80"
    bind:value={$texts.text1}
    placeholder="Type or paste a text"
    maxLength={TEXT_MAX_LENGTH}
  />
  <TextField
    className="w-1/2 h-80"
    bind:value={$texts.text2}
    placeholder="Type or paste a text"
    maxLength={TEXT_MAX_LENGTH}
  />
</div>
<div class="mt-5 flex justify-center">
  <Button appearance="primary" on:click={handleCompare}>Compare</Button>
</div>
