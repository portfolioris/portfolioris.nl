<script>
  export let type;
  export let name;
  export let placeholder;
  export let value = null;
  export let required;
  export let autocomplete;
  export let register;
  export let fieldState = {};
</script>

<style type="text/scss" lang="scss">
  @import 'engine';
  @import 'shared';

  input {
    @extend %inputText;
  }
</style>

<input
  type={type}
  id={name}
  name={name}
  placeholder={placeholder}
  value={value}
  required={required}
  autocomplete={autocomplete}
  aria-invalid={!fieldState.valid ? 'true' : null}
  aria-describedby={!fieldState.valid ? `error_${name}` : null}
  use:register
>
