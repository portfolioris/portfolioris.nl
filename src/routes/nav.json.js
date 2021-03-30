import fs from 'fs';
import fm from 'front-matter/index';

export function get(req, res) {
  const siteFile = fs.readFileSync('content/globals/site.md');
  const navData = fm(siteFile.toString()).attributes.primaryNav;
  return {
    body: navData,
  };
}
