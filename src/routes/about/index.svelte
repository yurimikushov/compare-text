<script lang="ts">
  import Layout from 'layouts/Layout'
  import ExternalLink from 'components/ExternalLink'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Layout>
  <p>
    This is text comparator based on
    <ExternalLink
      href="https://en.wikipedia.org/wiki/Longest_common_subsequence_problem"
    >
      the LCS problem
    </ExternalLink>
    solving algorithm.
  </p>
  <p>
    You can see the source code in
    <ExternalLink href="https://github.com/yurimikushov/text-comparator">
      this GitHub repository</ExternalLink
    >.
  </p>
</Layout>
