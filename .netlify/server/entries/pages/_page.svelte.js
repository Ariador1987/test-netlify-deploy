import { c as create_ssr_component, h as escape, f as each, l as add_attribute } from "../../chunks/index3.js";
import { t as title } from "../../chunks/config.js";
import { f as formatDate } from "../../chunks/utils.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-wm9or8{display:grid;gap:var(--size-7)}.post.svelte-wm9or8{max-inline-size:var(--size-content-3)}.post.svelte-wm9or8:not(:last-child){border-bottom:1px solid var(--border);padding-block-end:var(--size-7)}.title.svelte-wm9or8{font-size:var(--font-size-fluid-3);text-transform:capitalize}.date.svelte-wm9or8{color:var(--text-2)}.description.svelte-wm9or8{margin-block-start:var(--size-3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""}

<section><ul class="posts svelte-wm9or8">${each(posts, (post) => {
    return `<li class="post svelte-wm9or8"><a${add_attribute("href", post.slug, 0)} class="title svelte-wm9or8">${escape(post.title)}</a>
				<p class="date svelte-wm9or8">${escape(formatDate(post.date))}</p>
				<p class="description svelte-wm9or8">${escape(post.description)}</p>
			</li>`;
  })}</ul>
</section>`;
});
export {
  Page as default
};
