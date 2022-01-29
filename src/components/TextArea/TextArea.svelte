<script lang="ts">
  import cn from 'classnames'

  export let className = ''
  export let value: string
  export let placeholder = ''
  export let maxLength: number | null = null
</script>

<textarea
  class={cn(
    className,
    'p-3 text-base shadow-sm resize-none',
    'rounded-md border border-gray-300',
    'outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
  )}
  bind:value
  {placeholder}
  {maxLength}
/>
