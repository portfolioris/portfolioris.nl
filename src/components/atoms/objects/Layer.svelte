<script>
  export let size = 'large';
  export let collapseTop = false;
  export let collapseBottom = false;
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  /*  Module
      ========================================================================= */

  .o-layer {
    //
  }



  /*  Sizes
      ========================================================================= */

  .o-layer--tiny {
    padding-block: var(--space-tiny);
  }

  .o-layer--small {
    padding-block: var(--space-small);
  }

  .o-layer--medium {
    padding-block: var(--space-base);
  }

  .o-layer--large {
    padding-block: var(--space-base);
  }

  .o-layer--huge {
    padding-block: var(--space-large);
  }



  /*  Responsive
      ========================================================================= */

  @include responsive.mq(desk) {
    .o-layer--large {
      padding-block: var(--space-large);
    }

    .o-layer--huge {
      padding-block: var(--space-huge);
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
