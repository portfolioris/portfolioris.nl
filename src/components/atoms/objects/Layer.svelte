<script>
  import Theme from '../utilities/Theme.svelte';

  let background;
</script>

<Theme color="{background}" class="o-layer []">
  <slot></slot>
</Theme>
