<style lang="scss">
  @use 'src/sass/vars';
  @use '@supple-kit/supple-css/objects/layout' with (
    $gaps: ('tiny', 'small', 'base')
  );

  // custom extend
  .o-layout--nowrap {
    flex-wrap: nowrap;
  }
</style>

<div {...$$props}>
  <slot />
</div>
