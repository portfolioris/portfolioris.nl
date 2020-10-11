<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import DateString from '../atoms/text/DateString.svelte';

  export let items;
  export let collapseTop;
  export let collapseBottom;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  th,
  td {
    text-align: left;
    vertical-align: top;

    &:not(:first-of-type) {
      padding-left: vars.$space-tiny;
    }

    &:not(:last-of-type) {
      padding-right: vars.$space-tiny;
    }
  }

  .date-long {
    display: none;
    white-space: nowrap;
  }

  @include responsive.mq(lap) {
    .date-short {
      display: none;
    }

    .date-long {
      display: block;
    }
  }
</style>
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
                  <a href="https://www.themoviedb.org/movie/{item.id}">{item.title}</a>
                  (<DateString date={item.release_date} as="year" format="yyyy-MM-dd" />)
                </td>
                <td>
                  <span class="date-short">
                    <DateString date={item.account_rating.created_at} as="short" />
                  </span>
                  <span class="date-long">
                    <DateString date={item.account_rating.created_at} />
                  </span>
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
