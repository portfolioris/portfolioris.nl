<script>
  import { onMount } from 'svelte';
  import FieldInputTextarea from '../form-fields/FieldInputTextarea.svelte';
  import FieldInputText from '../form-fields/FieldInputText.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';
  import FieldSubmit from '../form-fields/FieldSubmit.svelte';

  let novalidate = false;
  let formState = {};

  onMount(() => {
    novalidate = true;
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  const register = function (node) {
    node.addEventListener('blur', () => {
      formState[node.id] = node.validity;
    });
  };

</script>

<form
  method="post"
  action=""
  novalidate={novalidate}
  on:submit={handleSubmit}
>

  <FieldInputTextarea
    label="Message"
    name="message"
    required
    fieldState={formState.message}
    register={register}
  />

  <Layout gutter="base">
    <Cell lap={[1, 2]}>
      <FieldInputText
        label="Name"
        name="name"
        required
        fieldState={formState.name}
        register={register}
      />
    </Cell>
    <Cell lap={[1, 2]}>
      <FieldInputText
        label="Email"
        name="email"
        required
        fieldState={formState.email}
        register={register}
      />
    </Cell>
  </Layout>

  <FieldSubmit label="Versturen" />
</form>
