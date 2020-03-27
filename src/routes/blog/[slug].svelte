<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Layer from '../../components/atoms/objects/Layer.svelte';
  import Retain from '../../components/atoms/objects/Retain.svelte';
  import Heading from '../../components/atoms/text/Heading.svelte';
  import Text from '../../components/atoms/text/Text.svelte';
  import DateString from '../../components/atoms/text/DateString.svelte';

  export let data;

  const {
    entry: {
      title,
      subheading,
      author: {
        firstName,
        lastName,
      },
      postDate,
      richText,
    },
  } = data;

</script>

<article>
  <Layer>
    <header>
      <Retain size="narrow">
        <Heading
          level={1}
          text={title}
        />
        <Text
          text={subheading}
          modifier="intro"
        />
        <p>Added by {firstName} {lastName}, <DateString date={postDate} /></p>
      </Retain>
    </header>
  </Layer>
  <Layer collapseTop>
    <Retain size="narrow">
      <Text text={richText} />
    </Retain>
  </Layer>
</article>
