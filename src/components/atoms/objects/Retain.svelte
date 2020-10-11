<script>
  export let size;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';



  /*  Module
      ========================================================================= */

  .o-retain {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px; // (1920 / 1.5, the multiplier of css-lock)
    padding-left: vars.$space-small;
    padding-right: vars.$space-small;
  }

  .o-retain--narrow {
    max-width: 48em;
  }



  /*  Responsive
      ========================================================================= */

  @include responsive.mq(lap) {
    .o-retain {
      padding-left: vars.$space-base;
      padding-right: vars.$space-base;
    }
  }

  @include responsive.mq(desk) {
    .o-retain {
      padding-left: 9%;
      padding-right: 9%;
    }

    .o-retain--breakout {
      padding-left: calc(9% - #{vars.$space-base});
      padding-right: calc(9% - #{vars.$space-base});
    }
  }

  .o-retain--full {
    padding-left: 0;
    padding-right: 0;
  }
</style>

<div
  class="o-retain"
  class:o-retain--full={size === 'full'}
  class:o-retain--narrow={size === 'narrow'}
  class:o-retain--breakout={size === 'breakout'}
>
  <slot></slot>
</div>
