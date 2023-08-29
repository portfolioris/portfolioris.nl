import { visit } from "unist-util-visit";
import { h } from "hastscript";

export default function remarkImage() {
  return (tree) => {
    // images are placed in <p> tags
    visit(tree, { tagName: "p" }, (node) => {
      // if the <p> tag contains an <img> tag
      if (node.children.some((child) => child.tagName === "img")) {
        // change it to a picture tag
        node.tagName = "figure";
        // create a picture with source element
        node.children.push(
          h("picture", [
            h("source", {
              srcset: `/img/q_auto,f_avif,c_scale,w_592/${node.children[0].properties.src} 592w, /img/q_auto,f_avif,c_scale,w_1184/${node.children[0].properties.src} 1184w`,
              type: "image/avif",
            }),
            h("source", {
              srcset: `/img/q_auto,f_webp,c_scale,w_592/${node.children[0].properties.src} 592w, /img/q_auto,f_webp,c_scale,w_1184/${node.children[0].properties.src} 1184w`,
              type: "image/webp",
            }),
            h("img", {
              alt: node.children[0].properties.alt,
              sizes:
                "(min-width: 640px) 592px, (min-width: 23.4375em) calc(100vw - 3rem), calc(100vw - 1rem)",
              loading: "lazy",
            }),
          ])
        );
        // set figcaption
        node.children.push(h("figcaption", node.children[0].properties.alt));

        // remove the <img> tag
        node.children.splice(0, 1);
      }
    });
  };
}
