<script>
  export let data;
  console.log(data);
</script>

<!--test
<enhanced:img
  src="/static/assets/img/logo-portfolioris&#45;&#45;small.png?w=150"
  alt="An alt text"
/>-->

<!--<svelte:component this={data.content} />-->
{@html data.content}
