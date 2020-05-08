<script>
  import Label from '../../atoms/input/FormLabel.svelte';
  import Textarea from '../../atoms/input/Textarea.svelte';
  import FormField from './FormField.svelte';
  import FormError from '../../atoms/input/FormError.svelte';

  export let label;
  export let name;
  export let required;
  export let error;
</script>

<FormField>
  <Label for={name} text={label} />

  <Textarea name={name} required={required} />

  <FormError name={name} text={error} />
</FormField>

