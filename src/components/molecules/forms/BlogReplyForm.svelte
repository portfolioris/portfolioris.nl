<script>
  import FieldInputTextarea from '../form-fields/FieldInputTextarea.svelte';
  import FieldInputText from '../form-fields/FieldInputText.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';
  import FieldSubmit from '../form-fields/FieldSubmit.svelte';
</script>

<form method="post" action="">
  <FieldInputTextarea label="Message" name="message" required />

  <Layout gutter="base">
    <Cell lap={[1, 2]}>
      <FieldInputText label="Name" name="name" required />
    </Cell>
    <Cell lap={[1, 2]}>
      <FieldInputText label="Email" name="email" required />
    </Cell>
  </Layout>

  <FieldSubmit />
</form>
