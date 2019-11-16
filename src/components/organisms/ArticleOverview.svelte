<script>
    import { blogStore } from './../../pageStore';

    import Theme from '../atoms/utilities/Theme.svelte';
    import Layer from '../atoms/objects/Layer.svelte';
    import Retain from '../atoms/objects/Retain.svelte';
    import Heading from '../atoms/text/Heading.svelte';
    import ArticleOverviewItem from '../molecules/ArticleOverviewItem.svelte';
    import Button from '../atoms/Button.svelte';

    export let heading;
    export let hideHeadingVisually = false;
    export let viewAllBlogs = false;
    export let latest = null;

    let items;

    const unsubscribe = blogStore.subscribe(value => {
        items = value;
    });
</script>
<section>
    <Theme color="black">
        <Layer>
            <Retain>
                <div class:u-visually-hidden={hideHeadingVisually}>
                    <Heading
                        text={heading}
                        level={2}
                        stylingLevel={2}
                    />
                </div>
            </Retain>
            <Retain size="breakout">
                <ul class="o-layout  o-layout--gutter  o-layout--equalheight">
                    {#each items as item}
                        <li class="o-layout__cell   u-fraction--1/2@from-lap  u-fraction--1/3@from-desk">
                            <ArticleOverviewItem
                                title={item.attributes.title}
                                subheading={item.attributes.subtitle}
                                uri={item.slug}
                            />
                        </li>
                    {/each}
                </ul>

                {#if viewAllBlogs}
                    <div class="o-layout  o-layout--align-center">
                        <div class="o-layout__cell  o-layout__cell--fit">
                            <p>
                                <Button
                                        href="#viewAllBlogs.entry.uri}"
                                        text="#viewAllBlogs.customText}"
                                />
                            </p>
                        </div>
                    </div>
                {/if}
            </Retain>
        </Layer>
    </Theme>
</section>
