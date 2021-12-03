<script context="module">
  // this file is just a shortcut to let `[...rest].js` pickup the root url
  export async function load({ fetch }) {
    const res = await fetch('home.json');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  }
</script>

<script>
  import Rest from './[...rest].svelte';

  export let data;
</script>

<Rest data={data} />
