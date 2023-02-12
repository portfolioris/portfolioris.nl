import fs from 'fs';
import fm from 'front-matter';

const siteFile = fs.readFileSync('content/globals/site.md');
const siteData = fm(siteFile.toString()).attributes;

import { getPages } from '../../utils/getDataFromApi';
const articles = getPages('content/pages/blog', 'blog/');

export const prerender = true;

export async function GET() {
  return new Response(
    `
    <rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>${siteData.siteName}</title>
        <link>${siteData.domain}</link>
        <description>A blog about HTML, CSS, accessibility and other stuff.</description>
        ${articles.map((article) => `
          <item>
            <title><![CDATA[${(article.title)}]]></title>
            <description>${article.subtitle}</description>
            <link>${siteData.domain}${article.uri}</link>
            <pubDate>${new Date(article.date)}</pubDate>
            <content:encoded>
              ${article.description} 
              <a href="${siteData.domain}${article.uri}">
                Keep reading
              </a>
            </content:encoded>
          </item>
        `).join('')}
      </channel>
      </rss>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
}