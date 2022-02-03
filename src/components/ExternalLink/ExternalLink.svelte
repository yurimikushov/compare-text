<script lang="ts">
  import cn from 'classnames'

  export let className = ''
  export let href: string
</script>

<a
  class={cn(className, 'text-blue-700 hover:underline')}
  {href}
  target="_blank"
>
  <slot />
</a>
