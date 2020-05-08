<script>
  export let color;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  .t-bg--black {
    background-color: $black;
  }

  .t-bg--white {
    background-color: $white;
  }

  .t-color--light {
    color: $white;
  }

  .t-color--dark {
    color: $black;
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
