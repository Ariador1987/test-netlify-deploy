import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as each, i as is_void, v as validate_component, g as subscribe, h as escape } from "../../chunks/index3.js";
import { t as title } from "../../chunks/config.js";
import { w as writable } from "../../chunks/index2.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
const browser = BROWSER;
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const userTheme = browser;
const theme = writable(userTheme);
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const Toggle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-dh5ui6.svelte-dh5ui6{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-dh5ui6>.svelte-dh5ui6{display:flex;gap:var(--size-2)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-dh5ui6">${$theme === "dark" ? `<div class="svelte-dh5ui6">${validate_component(Sun$1, "Sun").$$render($$result, {}, {}, {})}</div>` : `<div class="svelte-dh5ui6">${validate_component(Moon$1, "Moon").$$render($$result, {}, {}, {})}</div>`}
</button>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-10xpbum{padding-block:var(--size-7)}.links.svelte-10xpbum{margin-block:var(--size-7)}a.svelte-10xpbum{color:inherit;text-decoration:none}@media only screen and (min-width: 768px){nav.svelte-10xpbum{display:flex;justify-content:space-between}.links.svelte-10xpbum{display:flex;gap:var(--size-7);margin-block:0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-10xpbum"><a href="/" class="title svelte-10xpbum"><b>${escape(title)}</b></a>

	<ul class="links svelte-10xpbum"><li><a href="/about" class="svelte-10xpbum">About</a></li>
		<li><a href="/contact" class="svelte-10xpbum">Contact</a></li>
		<li><a href="/rss.xml" target="_blank" class="svelte-10xpbum">RSS</a></li></ul>

	${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})}
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-ci2l06{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-ci2l06{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-ci2l06"><p class="svelte-ci2l06">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p>
</footer>`;
});
const Transition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition.svelte-1qzsbtq{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-1qzsbtq">${slots.default ? slots.default({}) : ``}</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-isaa0w{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-isaa0w{padding-block:var(--size-9)}@media only screen and (min-width: 1440px){.layout.svelte-isaa0w{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-isaa0w">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-isaa0w">${validate_component(Transition, "Transition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
