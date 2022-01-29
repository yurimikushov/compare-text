<script lang="ts">
  import cn from 'classnames'
  import TextArea from 'components/TextArea'

  export let className = ''
  export let value: string
  export let placeholder = ''
  export let maxLength: number
</script>

<div class={cn(className, 'flex flex-col items-end gap-2')}>
  <TextArea className="w-full h-full" bind:value {placeholder} {maxLength} />
  <div class="mx-1 text-gray-400">
    {`${value.length} / ${maxLength}`}
  </div>
</div>
