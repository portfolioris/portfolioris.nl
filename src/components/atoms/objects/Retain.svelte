<script>
  export let isBreakout = false;
  export let noPadding = false;
  export let size;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/retain';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';



  /*  Module
      ========================================================================= */

  @include responsive.mq(desk) {
    .o-retain--wall {
      padding-inline-start: 9%;
      padding-inline-end: 9%;
    }

    .o-retain--breakout {
      padding-inline-start: calc(9% - #{vars.$space-base});
      padding-inline-end: calc(9% - #{vars.$space-base});
    }
  }
</style>

<div
  class="o-retain"
  class:o-retain--lap={size === 'lap'}
  class:o-retain--desk={size === 'desk'}
  class:o-retain--wall={size === 'wall'}
  class:o-retain--breakout={isBreakout}
  class:o-retain--no-padding={noPadding}
>
  <slot />
</div>
