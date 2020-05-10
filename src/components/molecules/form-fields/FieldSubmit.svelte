<script>
  import FormField from './FormField.svelte';
  import Button from '../../atoms/Button.svelte';

  export let label;
</script>

<FormField>
  <Button element="button" type="submit" label={label} />
</FormField>
