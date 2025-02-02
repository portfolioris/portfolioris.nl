export const load = async ({ params }) => {
  // return pageData(params.rest);
  try {
    const thing = await import("../../../content/pages/home.md");
    // console.log(thing.default.render().html);
    return {
      foo: "bar",
      content: thing.default.render().html,
    };
  } catch (e) {}
};
