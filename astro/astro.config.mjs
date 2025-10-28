// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	image: {
		// Disable remote image fetching to avoid SSRF surface; allowlist selectively if needed.
		service: { entrypoint: 'astro/assets/services/sharp' },
		remotePatterns: []
	}
});
