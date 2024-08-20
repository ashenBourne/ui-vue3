/*
 * @Date: 2024-07-13 18:31:29
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 15:56:32
 * @FilePath: \UIPackage\ts\ui-vue3\vite.config.ts
 */
import { defineConfig } from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': '/src/', // 设置@指向src
      '@components': '/src/components' // 设置@components指向src/components
    }
  }
})
