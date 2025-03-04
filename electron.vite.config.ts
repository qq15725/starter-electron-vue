import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import vueRouter from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-meta-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '~': resolve('src/renderer/src'),
        '@': resolve('src/renderer/src'),
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      vue({ template: { transformAssetUrls } }),
      tailwindcss(),
      vuetify({ autoImport: true }),
      autoImport({
        imports: [
          'vue',
          'pinia',
          VueRouterAutoImports,
          { vuetify: ['useTheme', 'useRtl', 'useLocale', 'useDisplay', 'useLayout'] },
        ],
        dts: resolve('src/renderer/src/auto-imports.d.ts'),
        dirs: ['src/stores'],
      }),
      components({ dts: resolve('src/renderer/src/components.d.ts'), types: [] }),
      vueRouter({ importMode: 'sync', dts: resolve('src/renderer/src/typed-router.d.ts') }),
      layouts(),
    ],
  },
})
