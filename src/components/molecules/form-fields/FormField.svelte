<script>
  import FormError from '../../atoms/input/FormError.svelte';

  export let fieldState;
  export let name;

  let error;

  $: {
    if (fieldState && !fieldState.valid) {
      error = 'error here';
    } else {
      error = null;
    }
  }
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  div {
    margin-bottom: $supple-space-base;
  }
</style>

<div>
  <slot />
  <FormError name={name} text={error} />
</div>
