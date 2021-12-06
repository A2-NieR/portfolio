import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    Pages(),
    Icons({
      autoInstall: true
    }),
    Components({
      resolvers: [
        IconsResolver({
          componentPrefix: ''
        })
      ]
    }),
    AutoImport({
      imports: ['vue']
    }),
    WindiCSS()
  ]
})
