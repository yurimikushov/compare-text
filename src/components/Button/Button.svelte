<script lang="ts">
  import cn from 'classnames'
  import type { Appearance } from './Button.props'

  export let className = ''
  export let appearance: Appearance = 'primary'
</script>

<button
  class={cn(
    className,
    'py-2 px-4',
    'text-base font-medium rounded-md',
    'border shadow-sm outline-none',
    'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    {
      'text-white bg-indigo-600 hover:bg-indigo-700 border-transparent':
        appearance === 'primary',
      'text-gray-600 bg-white hover:bg-gray-50 border-gray-300':
        appearance === 'secondary'
    }
  )}
  on:click
>
  <slot />
</button>
