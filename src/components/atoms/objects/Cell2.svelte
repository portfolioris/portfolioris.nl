<style lang="scss">
  @use 'src/sass/vars';
  @use '@supple-kit/supple-css/objects/layout'; // with (
  //@use '@supple-kit/supple-css/objects/layout' with (
  //  $gaps: ('tiny', 'small', 'base')
  //);

  // custom extend
  [nowrap] {
    flex-wrap: nowrap;
  }
</style>

<o-layout-cell {...$$props}>
  <slot />
</o-layout-cell>
