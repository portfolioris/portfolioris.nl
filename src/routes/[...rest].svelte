<script context="module">
  import { gql } from 'apollo-boost';
  import { client } from '../apollo';

  export async function preload({ params }) {
    // encode params, can't pass slashes to json
    const res = await this.fetch(`${params.rest.join(',')}.json`);
    if (res.status !== 200) {
      this.error(404, 'Not found');
    }

    const data = await res.json();

    console.log(data);

    const PAGES = gql`
      query ModularPage($uri: String!) {
        entry(uri: $uri) {
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


    const account = await client.query({ query: PAGES, variables: { uri: data.uri } });
    return account.data.entry;
  }
</script>

<script>
  import ModularPageTemplate from './_ModularPageTemplate.svelte';

  export let title;
  export let section = {};
  export let modules = [];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if section.handle === 'modularPage'}
  <ModularPageTemplate modules={modules} />
{/if}
