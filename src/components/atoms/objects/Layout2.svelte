<script>
  export let nowrap = false;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'supple-ui-svelte/o-layout' with (
    $gaps: ('tiny', 'small', 'base')
  );

  // custom extend
  [nowrap] {
    flex-wrap: nowrap;
  }
</style>

<o-layout {...$$props}
  nowrap={nowrap}
>
  <slot />
</o-layout>
