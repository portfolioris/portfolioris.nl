import { pageData } from "../../utils/pageData.js";

export const load = ({ params }) => {
  return pageData(params.rest);
};
