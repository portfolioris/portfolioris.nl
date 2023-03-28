// import { visit } from "unist-util-visit";
// import Figure from "../components/molecules/Figure.svelte";
//
// async function transformer(tree) {
//   visit(tree, (node, index, parent) => {
//     // console.log(node, index, parent);
//     if (node.tagName === "img") {
//       console.log(node);
//     }
//   });
//   // console.log("I AM TRANSFORMER", tree);
//   // visit(tree, "image", (node) => {
//   //   console.log("TRANSFORMER", node);
//   // });
// }
//
// function image() {
//   return transformer;
// }
//
// export default image;

export async function remarkImage() {
  const Fig = import("../components/molecules/Figure.svelte");
  return function (tree, { data }) {
    console.log("we are in the transformer", tree, data);
  };
}
