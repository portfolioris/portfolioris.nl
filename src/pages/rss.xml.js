import rss from "@astrojs/rss";

export async function get(context) {
  const pages = import.meta.glob("../../content/pages/blog/*.md", {
    eager: true,
  });

  return rss({
    // `<title>` field in output xml
    title: "Portfolioris blog",
    // `<description>` field in output xml
    description: "All blogs by Joris Hulsbosch",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: Object.values(pages).map((page) => ({
      title: page.frontmatter.title,
      pubDate: page.frontmatter.date,
      description: page.frontmatter.description,
      link: page.url,
    })),
    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
  });
}
