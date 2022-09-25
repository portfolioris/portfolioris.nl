import { pageData } from './pageData';

export async function load({ params }) {
  return pageData(params);
}
