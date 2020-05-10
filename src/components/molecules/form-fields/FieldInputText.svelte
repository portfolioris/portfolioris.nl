<script>
  import Label from '../../atoms/input/FormLabel.svelte';
  import InputText from '../../atoms/input/InputText.svelte';
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

  <InputText
    name={name}
    required={required}
    register={register}
    fieldState={fieldState}
  />
</FormField>
