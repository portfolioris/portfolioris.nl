<script>
  export let name;
  export let text;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  p {
    color: $color-error;
    font-size: $milli;
    margin-top: $supple-space-tiny;
    margin-bottom: 0;
  }
</style>

{#if text}
  <p id={`error_${name}`}>{text}</p>
{/if}
