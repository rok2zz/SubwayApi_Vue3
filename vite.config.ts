import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
 	plugins: [
		vue(),
		AutoImport({
			include: [
				/\.[tj]sx?$/,
				/\.vue$/, // $ at the end with vue
			], // targets (file extensions)
			imports: [ "vue", "vue-router", "pinia" ], // globals (libraries)
			dts: true,
			vueTemplate: true,		
			eslintrc: { enabled: true }	
		})
	],	
	base: "./",
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": path.resolve(__dirname, "src/components"),
			"@views": path.resolve(__dirname, "src/views"),
			"@stores": path.resolve(__dirname, "src/stores")
		}
	}	
})
