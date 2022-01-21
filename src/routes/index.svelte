<script context="module" lang="ts">
  import Button from 'components/Button'

  export const prerender = true

  const handleClick = () => {
    alert('click')
  }
</script>

<div class="w-full h-screen flex justify-center items-center gap-3">
  <Button appearance="primary" on:click={handleClick}>Click me</Button>
  <Button appearance="secondary" on:click={handleClick}>Click me too</Button>
</div>
