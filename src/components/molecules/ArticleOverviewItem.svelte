<script>
    import Theme from '../atoms/utilities/Theme.svelte';
    import Heading from '../atoms/text/Heading.svelte';

    export let title;
    export let uri;
    export let subheading;
    export let postDate;
</script>

<style type="text/scss" lang="scss">
    @import 'engine';

    article {
        padding: $supple-space;
        height: 100%;
        position: relative;

        & :global(a::after) { // b/c there is no <a> here ....
            content: '';
            position: absolute;
            z-index: 2;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        > :global(*) {
            margin-bottom: $supple-space-tiny;
        }

        > :last-child {
            margin-bottom: 0;
        }
    }

    .subheading {
      font-weight: $font-weight-bold;
    }

    p {
      font-size: $micro;
    }
</style>

<Theme color="white">
    <article>
        <Heading
            text={title}
            level={3}
            stylingLevel={4}
            href={uri}
        />
        <p class="subheading">
            {subheading}
        </p>
        <p>
            date
<!--            <DateString dateString={postDate} />-->
        </p>
    </article>
</Theme>
