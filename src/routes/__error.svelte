<script context="module">
  export function load({
    error,
    status,
  }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  export let title;
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{title}</h1>

<!--<p>{error.message}</p>-->

<!--{#if dev && error.stack}-->
<!--  <pre>{error.stack}</pre>-->
<!--{/if}-->
