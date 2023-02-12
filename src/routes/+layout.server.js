import fs from 'fs';
import fm from 'front-matter';

export async function load({ params }) {
  const siteFile = fs.readFileSync('content/globals/site.md');
  const siteData = fm(siteFile.toString()).attributes;

  return {
    siteData,
  };
}
