<script>
  import marked from 'marked';

  export let text;
  export let type;

  if (type === 'md') {
    text = marked(text);
  }
</script>

<style type="text/scss" lang="scss">
  @import "engine";

  :global(a) {
    color: $green;
    font-weight: $font-weight-bold;
    transition: color $base-transition-duration $base-timing-function;

    #{$global-interaction-states} {
      color: $white;
    }
  }

</style>

<div class="u-module  u-m-b">
    {@html marked(text)}
</div>

