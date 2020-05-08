<script>
  import Label from '../../atoms/input/FormLabel.svelte';
  import InputText from '../../atoms/input/InputText.svelte';
  import FormField from './FormField.svelte';
  import FormError from '../../atoms/input/FormError.svelte';
  import Button from '../../atoms/Button.svelte';

  export let label;
  export let name;
  export let required;
  export let error;
</script>

<FormField>
  <Button element="button" type="submit" label="Versturen" />
</FormField>
