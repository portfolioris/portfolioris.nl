<script>
  export let color;
</script>

<style type="text/scss" lang="scss">
  @use 'sass/vars';

  .t-bg--black {
    background-color: vars.$color-black;
  }

  .t-bg--white {
    background-color: vars.$color-white;
  }

  .t-color--light {
    color: vars.$color-white;
  }

  .t-color--dark {
    color: vars.$color-black;
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
