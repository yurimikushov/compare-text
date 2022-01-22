<script lang="ts">
  import type { Token } from 'lib/diff/types'
  import BaseTextArea from './BaseTextArea.svelte'
  import TextAreaWithHighlighter from './TextAreaWithHighlighter.svelte'

  export let className: string
  export let value: string
  export let placeholder = ''
  export let withHighlightingChanges = false
  export let valueChanges: Array<Token> = []
</script>

{#if withHighlightingChanges}
  <TextAreaWithHighlighter {className} bind:value {valueChanges} />
{:else}
  <BaseTextArea {className} bind:value {placeholder} />
{/if}
