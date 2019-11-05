<script>
    import Theme from '../atoms/utilities/Theme.svelte';
    import Heading from '../atoms/text/Heading.svelte';

    export let title;
    export let uri;
    export let subheading;
    export let postDate;
</script>

<Theme color="white">
    <article class="u-module  u-p  u-h-100  o-clickable">
        <Heading
            text={title}
            level={3}
            stylingLevel={4}
            href={uri}
            className="u-m-b-tiny"
        />
        <p class="u-micro  u-text-bold  u-m-b-tiny">
            {subheading}
        </p>
        <p class="u-micro">
<!--            <DateString dateString={postDate} />-->
        </p>
    </article>
</Theme>
