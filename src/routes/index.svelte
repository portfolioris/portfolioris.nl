<script context="module">
  import { gql } from 'apollo-boost';
  // import { client } from '../apollo';

  const PAGES = gql`
    query ModularPage {
      entries {
        uri
        title
        section {
          handle
        }
        __typename
        ... on ModularPage {
          __typename
          modules {
__typename
            ... on ModulesRichTextBlock {
              __typename
              richText
            }
            ... on ModulesBlogOverview {
              __typename
              heading
              hideHeadingVisually
              latest
            }
          }
        }
      }
    }
  `;

  export async function preload() {
    // return {
    //   cache: await client.query({ query: PAGES })
    // }
  }
</script>

<script>
  import { setClient, restore, query } from 'svelte-apollo';
  // export let cache;
  // console.log(cache)
  // restore(client, PAGES, cache.data);
  // setClient(client);
  //
  // import ModularPageTemplate from './_ModularPageTemplate.svelte';
  //
  // export let title;
  // export let section = {};
  // export let modules = [];
  // import PAGE from '../queries/modularPage.graphql';
  // const stuff = query(client, PAGE);
  // console.log(cache.data.entries[0])
</script>

