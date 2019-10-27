<script>
  export let size;
</script>

<style type="text/scss" lang="scss">
  /*  Imports
      ========================================================================= */

  @import "engine";



  /*  Module
      ========================================================================= */

  .o-retain {
    margin-left: auto;
    margin-right: auto;
    max-width: 1920px;
    padding-left: $supple-space-small;
    padding-right: $supple-space-small;
  }

  .o-retain--narrow {
    max-width: 48em;
  }



  /*  Responsive
      ========================================================================= */

  @include supple-mq(lap) {
    .o-retain {
      padding-left: $supple-space;
      padding-right: $supple-space;
    }
  }

  @include supple-mq(desk) {
    .o-retain {
      padding-left: 9%;
      padding-right: 9%;
    }

    .o-retain--breakout {
      padding-left: calc(9% - #{supple-value-to-rem($supple-space)});
      padding-right: calc(9% - #{supple-value-to-rem($supple-space)});
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
