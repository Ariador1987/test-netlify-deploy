export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e024b09a.js","app":"_app/immutable/entry/app.1cc9db44.js","imports":["_app/immutable/entry/start.e024b09a.js","_app/immutable/chunks/index.7381cbaf.js","_app/immutable/chunks/singletons.cfbbe1f0.js","_app/immutable/chunks/index.c367dd2f.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.1cc9db44.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.7381cbaf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/rss.xml/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
