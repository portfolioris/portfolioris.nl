import { pageData } from "../../utils/pageData.js";

export const load = async ({ params }) => {
  return await pageData(params.rest || "home");
};
