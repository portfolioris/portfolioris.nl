<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import DateString from '../atoms/text/DateString.svelte';

  export let items;
  export let collapseTop;
  export let collapseBottom;
</script>
<section>
  <Layer collapseBottom={collapseBottom} collapseTop={collapseTop}>
    <Retain size="narrow">
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Watched on</th>
            <th scope="col">My rating</th>
          </tr>
        </thead>
        <tbody>
            {#each items as item}
              <tr>
                <td>
                  <a href="https://www.themoviedb.org/movie/{item.id}">{item.title}</a> (
                  <DateString date={item.release_date} as="year" format="yyyy-MM-dd" />
                  )
                </td>
                <td>
                  <DateString date={item.account_rating.created_at} format={null} />
                </td>
                <td>
                    {item.account_rating.value} <small>/ 10</small>
                </td>
              </tr>
            {/each}
        </tbody>
      </table>
    </Retain>
  </Layer>
</section>
