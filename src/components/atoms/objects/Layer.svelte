<script>
  export let size = 'large';
  export let collapseTop = false;
  export let collapseBottom = false;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  /*  Module
      ========================================================================= */

  .o-layer {
    //
  }

  /*  Sizes
      ========================================================================= */

  .o-layer--tiny {
    padding-block-start: vars.$space-tiny;
    padding-block-end: vars.$space-tiny;
  }

  .o-layer--small {
    padding-block-start: vars.$space-small;
    padding-block-end: vars.$space-small;
  }

  .o-layer--medium {
    padding-block-start: vars.$space-base;
    padding-block-end: vars.$space-base;
  }

  .o-layer--large {
    padding-block-start: vars.$space-base;
    padding-block-end: vars.$space-base;
  }

  .o-layer--huge {
    padding-block-start: vars.$space-base*2;
    padding-block-end: vars.$space-base*2;
  }



  /*  Responsive
      ========================================================================= */

  @include responsive.mq(desk) {
    .o-layer--large {
      padding-block-start: vars.$space-base*2;
      padding-block-end: vars.$space-base*2;
    }

    .o-layer--huge {
      padding-block-start: vars.$space-base*4;
      padding-block-end: vars.$space-base*4;
    }
  }



  /*  Overrides
      ========================================================================= */

  .o-layer--collapse-top {
    padding-block-start: 0;
  }

  .o-layer--collapse-bottom {
    padding-block-end: 0;
  }
</style>

<div
  class="o-layer"
  class:o-layer--tiny={size === 'tiny'}
  class:o-layer--small={size === 'small'}
  class:o-layer--medium={size === 'medium'}
  class:o-layer--large={size === 'large'}
  class:o-layer--huge={size === 'huge'}
  class:o-layer--collapse-top={collapseTop}
  class:o-layer--collapse-bottom={collapseBottom}
>
  <slot></slot>
</div>
