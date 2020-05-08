<script>
  export let name;
  export let required = false;
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
></textarea>
