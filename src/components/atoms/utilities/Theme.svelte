<script>
  export let color;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  .t-bg--black {
    background-color: $color-black;
  }

  .t-bg--white {
    background-color: $color-white;
  }

  .t-color--light {
    color: $color-white;
  }

  .t-color--dark {
    color: $color-black;
  }
</style>

<div
  class:t-bg--black={color === 'black'}
  class:t-color--light={color === 'black'}
  class:t-bg--white={color === 'white'}
  class:t-color--dark={color === 'white'}
>
  <slot></slot>
</div>
