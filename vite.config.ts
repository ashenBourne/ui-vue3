/*
 * @Date: 2024-07-13 18:31:29
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 12:16:28
 * @FilePath: \ts\ui-vue3\vite.config.ts
 */
import { defineConfig } from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"
import vue from '@vitejs/plugin-vue'
import path from 'path'
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
  
    // alias:[
    //   {
    //     find:"@",
    //     replacement:path.resolve(__dirname,"src")
    //   }
    // ]
  }
})
