<script context="module">
  // this file is just a shortcut to let `[...rest].svelte` pickup the root url
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
  import Layout from '../components/atoms/objects/Layout2.svelte';
  import Cell from '../components/atoms/objects/Cell2.svelte';

  export let data;
</script>

<hr />
<br />

<Layout class="o-layout  o-layout--fit  o-layout--gap-small  o-layout--nowrap" role="list">
  <Cell role="listitem" class="o-layout__fill">
    Fill me
  </Cell>
  <li>
    Cell 1 Cell 1 Cell 1 Cell 1 Cell 1 Cell 1
  </li>
  <li>
    Cell 2 Cell 2 Cell 2 Cell 2 Cell 2 Cell 2
  </li>
</Layout>

<br />

<hr />

<Rest data={data} />
