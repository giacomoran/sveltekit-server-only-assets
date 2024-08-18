import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		assetsInlineLimit: (path) => {
			if (path.endsWith('foo.txt')) return false;
			return undefined;
		}
	}
});
