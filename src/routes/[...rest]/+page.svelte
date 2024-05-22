<script>
  import ModularPageTemplate from "../../templates/ModularPageTemplate.svelte";
  import BlogTemplate from "../../templates/BlogTemplate.svelte";
  import Head from "../../templates/Head.svelte";
  import Navigation from "../../components/organisms/Navigation.svelte";

  export let data;
</script>

<Head {...data} />

<Navigation items={data.site.primaryNav}>
  {#if data.modules}
    <ModularPageTemplate {...data} />
  {/if}

  {#if data.template === "blog"}
    <BlogTemplate {...data} />
  {/if}
</Navigation>
