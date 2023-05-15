import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.2eac5467.js","_app/immutable/chunks/index.7381cbaf.js","_app/immutable/chunks/config.969154fb.js","_app/immutable/chunks/utils.ce1577a1.js"];
export const stylesheets = ["_app/immutable/assets/2.a38893c3.css"];
export const fonts = [];
