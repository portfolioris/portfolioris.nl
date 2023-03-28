<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';

  export let items = [];
  export let collapseTop;
  export let collapseBottom;
</script>
<section>
  <Layer collapseTop={collapseTop} collapseBottom={collapseBottom}>
    <Retain size="lap">
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
                  <a href="{item.book.link}">{item.book.title_without_series}</a> {#if item.book.publication_year}({item.book.publication_year}){/if}
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
