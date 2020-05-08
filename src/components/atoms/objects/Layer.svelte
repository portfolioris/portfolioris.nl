<script>
  export let size = 'large';
  export let collapseTop = false;
  export let collapseBottom = false;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  /*  Module
      ========================================================================= */

  .o-layer {
    position: relative;

    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }

  /*  Sizes
      Padding on the bottom lacks the standard margin height elements have so
      it will fill up just right
      ========================================================================= */

  .o-layer--tiny {
    padding: $supple-space-tiny 0;
  }

  .o-layer--small {
    padding: $supple-space-small 0;
  }

  .o-layer--medium {
    padding: $supple-space-base 0 0;
  }

  .o-layer--large {
    padding: $supple-space-base 0 0;
  }

  .o-layer--huge {
    padding: $supple-space-base*2 0 $supple-space-base 0;
  }

  .o-layer--flat {
    padding-top: 0;
    padding-bottom: 0;
  }



  /*  Responsive
      ========================================================================= */

  @include supple-mq(desk) {
    .o-layer--large {
      padding: $supple-space-base*2 0 $supple-space-base*1;
    }

    .o-layer--huge {
      padding: $supple-space-base*4 0 $supple-space-base*3;
    }
  }



  /*  Overrides
      ========================================================================= */

  .o-layer--collapse-top {
    padding-top: 0;
  }

  .o-layer--collapse-bottom {
    padding-bottom: 0;
  }
</style>

<div
  class="o-layer"
  class:o-layer--flat={size === 'flat'}
  class:o-layer--tiny={size === 'tiny'}
  class:o-layer--small={size === 'small'}
  class:o-layer--medium={size === 'medium'}
  class:o-layer--large={size === 'large'}
  class:o-layer--huge={size === 'huge'}
  class:o-layer--fullscreen={size === 'fullscreen'}
  class:o-layer--collapse-top={collapseTop}
  class:o-layer--collapse-bottom={collapseBottom}
>
  <slot></slot>
</div>
