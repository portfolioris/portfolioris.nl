import { pageData } from './[...rest]/pageData';

export async function load({ params }) {
  return pageData(params);
}
