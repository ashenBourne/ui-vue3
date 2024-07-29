/*
 * @Date: 2024-07-16 20:53:41
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 16:07:47
 * @FilePath: \UIPackage\ts\ui-vue3\docs\.vitepress\config.ts
 */
import { defineConfig } from 'vitepress'
import vueJsx from "@vitejs/plugin-vue-jsx"
 // @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
 import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
 import { fileURLToPath, URL } from 'node:url'
 // https://vitepress.dev/reference/site-config
 export default defineConfig({
   title: 'ZY-UI',
   description: 'A VitePress Site',
   vite: {
    plugins:[
      vueJsx()
    ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('../../src', import.meta.url))
       }
     }
   },
   themeConfig: {
     // https://vitepress.dev/reference/default-theme-config
     nav: [ 
       { text: '指南', link: '/guild/index' },
       { text: '组件', link: '/components/button' }
     ],
     sidebar: [
       {
         text: '基础',
         items: [
           { text: '按钮 Button', link: '/components/button' }
         ]
       },
     ],
     socialLinks: [
       { icon: 'github', link: 'https://github.com/ashenBourne/ui-vue3' },
       {
         icon: 'x',
         link: 'https://github.com/ashenBourne/ui-vue3',
         ariaLabel: 'Blog'
       }
     ],
     logo: '/logo.png',
   },
   markdown: {
     // @vitepress-demo-preview的配置
     config(md) {
       // 支持区块内的方式展示 demo 和示例代码
       md.use(containerPreview)
       md.use(componentPreview)
     }
   },
   base: '/zy-ui/'  // 这里是为了后面部署到 github pages 上要用的路径
 })
