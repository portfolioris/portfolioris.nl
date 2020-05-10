<script>
  import Label from '../../atoms/input/FormLabel.svelte';
  import Textarea from '../../atoms/input/Textarea.svelte';
  import FormField from './FormField.svelte';
  import FormError from '../../atoms/input/FormError.svelte';

  export let label;
  export let name;
  export let required;
  export let register;
  export let fieldState;
</script>

<FormField fieldState={fieldState} name={name}>
  <Label for={name} text={label} />
  <Textarea
    name={name}
    required={required}
    register={register}
    fieldState={fieldState}
  />
</FormField>

