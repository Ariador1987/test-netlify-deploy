import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "First post",
  "description": "First post is not so great.",
  "date": "2023-4-14",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id="markdown">Markdown</h2>
<p>Hey friends! 👋</p>
<!-- HTML_TAG_START -->${`<pre class="shiki nord" style="background-color: #2e3440ff" tabindex="0"><code><span class="line"><span style="color: #81A1C1">function</span><span style="color: #D8DEE9FF"> </span><span style="color: #88C0D0">greet</span><span style="color: #ECEFF4">(</span><span style="color: #D8DEE9">name</span><span style="color: #81A1C1">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">string</span><span style="color: #ECEFF4">)</span><span style="color: #D8DEE9FF"> </span><span style="color: #ECEFF4">&#123;</span></span>
<span class="line"><span style="color: #D8DEE9FF">	</span><span style="color: #D8DEE9">console</span><span style="color: #ECEFF4">.</span><span style="color: #88C0D0">log</span><span style="color: #D8DEE9FF">(</span><span style="color: #ECEFF4">&#96;</span><span style="color: #A3BE8C">Hey </span><span style="color: #ECEFF4">$&#123;</span><span style="color: #D8DEE9">name</span><span style="color: #ECEFF4">&#125;</span><span style="color: #A3BE8C">! 👋</span><span style="color: #ECEFF4">&#96;</span><span style="color: #D8DEE9FF">)</span><span style="color: #81A1C1">;</span></span>
<span class="line"><span style="color: #ECEFF4">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
