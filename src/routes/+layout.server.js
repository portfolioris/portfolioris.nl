import fs from 'fs';
import fm from 'front-matter';

export async function load({ params }) {
  const siteFile = fs.readFileSync('content/globals/site.md');
  const navData = fm(siteFile.toString()).attributes.primaryNav;

  return {
    navItems: navData,
  }
}
