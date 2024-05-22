<script>
  import Head from "../templates/Head.svelte";
  import { page } from "$app/stores";
  import Navigation from "../components/organisms/Navigation.svelte";
  import Retain from "../components/atoms/objects/Retain.svelte";
  import Layer from "../components/atoms/objects/Layer.svelte";
</script>

<Head {...$page.error} title="404: not found" />

<Navigation items={$page.error.site.primaryNav}>
  <section>
    <Layer>
      <Retain size="lap">
        <h1>404: not found</h1>
      </Retain>
    </Layer>
  </section>
</Navigation>
