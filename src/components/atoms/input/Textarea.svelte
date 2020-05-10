<script>
  export let name;
  export let required = false;
  export let register;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';
  @import 'shared';

  textarea {
    @extend %inputText;
  }
</style>

<textarea
  id={name}
  name={name}
  required={required}
  use:register
></textarea>
