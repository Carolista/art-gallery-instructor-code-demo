import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// allows you to test your local dev instance on other devices on the same Wifi network
		host: true,
	},
});
