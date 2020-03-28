import { gql } from 'apollo-boost';
import { client } from '../../apollo';
import marked from 'marked';
import hljs from 'highlight.js';
import css from 'highlight.js/lib/languages/css';
import Figure from '../../components/molecules/Figure.svelte';

hljs.registerLanguage('css', css);
const renderer = new marked.Renderer();

let imagesData;


renderer.paragraph = (input) => {
  const hasImage = input.startsWith('<figure>');
  return hasImage ? input : `<p>${input}</p>`;
};

renderer.image = (href, title, text) => {
  const imgId = parseFloat(href
    .replace('{asset:', '')
    .replace('}', ''),
  );

  return Figure.render({
    figcaption: text,
    imgObj: imagesData.find((asset) => asset.id === imgId),
  }).html;
};

const BLOG = gql`
  query BlogPost($uri: String!) {
    entry(uri: $uri) {
      id
      title
      ... on Blog {
        title
        subheading
        richText
        description
        mainImage {
          filename
          title
          folder {
            path
          }
        }
        author {
          twitterHandle
          firstName
          lastName
        }
        postDate
        dateUpdated
        uri
        section {
          name
          handle
        }
      }
    }
    assets {
      folder {
        path
      }
      filename
      title
      id
    }
    globals {
      settings {
        siteName
        twitterHandle
        domain
      }
    }
  }
`;

export async function get(req, res, next) {
  const blog = client.query({ query: BLOG, variables: { uri: `blog/${req.params.slug}` } });
  const result = await blog;
  imagesData = result.data.assets;

  if (result.data.entry) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    result.data.entry.richText = marked(
      result.data.entry.richText,
      {
        renderer,
        highlight: (code, language) => {
          const validLanguage = hljs.getLanguage(language) ? language : 'css';
          return `<div class="c-codeblock">${hljs.highlight(validLanguage, code).value}</div>`;
        },
      });

    res.end(JSON.stringify({ ...result.data }));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      message: `Blog not found`,
    }));
  }
}
