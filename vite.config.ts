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
				}
			}
		})
	]
});
