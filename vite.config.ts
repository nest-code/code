import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			prerender: {
				handleHttpError: ({ path, status }) => {
					// Decap CMS is served from static/admin, not a SvelteKit route.
					if (path === '/admin/' && status === 404) return;
					throw new Error(`Prerender failed for ${path} with status ${status}`);
				},
				handleUnseenRoutes: ({ routes, message }) => {
					// The article detail route has no entries until published Markdown exists.
					const unexpected = routes.filter((route) => route !== '/artikel/[slug]');
					if (unexpected.length === 0) return;
					throw new Error(message);
				}
			}
		})
	]
});
