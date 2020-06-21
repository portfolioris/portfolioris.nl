<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';

  export let richText;
  export let items;
</script>
<section>
  <Layer>
    <Retain size="narrow">
      <Text text={richText} />

      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
            {#each items as item}
              <tr>
                <td>
                  <a href="{item.book.link}">{item.book.title_without_series}</a>
                </td>
                <td>
                    {item.book.authors.author.name}
                </td>
              </tr>
            {/each}
        </tbody>
      </table>
    </Retain>
  </Layer>
</section>
