<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const res = fetch('https://letterboxd.com/portfolioris/rss/', {
    // const res = fetch('https://codepen.io/picks/feed/', {
      mode: 'no-cors'
    });
    console.log((await res));
    // const module = await import('my-non-ssr-component');
    // MyComponent = module.default;
  });
</script>
