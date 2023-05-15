import { c as create_ssr_component, l as add_attribute, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt || "Svelte", 0)} loading="lazy">`;
});
const metadata = {
  "title": "Second post",
  "description": "Second post is great.",
  "date": "2023-4-16",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<script>import * as Layout "../lib/components/custom"
<\/script>
<h2 id="table-of-contents">Table of Contents</h2>
<ul><li><a href="#svelte">Svelte</a></li></ul>
<h2 id="svelte">Svelte</h2>
<p>Media inside the <strong>static</strong> folder is served from <code>/</code>.</p>
${validate_component(Img, "Components.img").$$render($$result, { src: "favicon.png" }, {}, {})}`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Second_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
