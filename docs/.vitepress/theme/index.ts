/*
 * @Date: 2024-07-16 21:21:19
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 17:53:52
 * @FilePath: \UIPackage\ts\ui-vue3\docs\.vitepress\theme\index.ts
 */
import DefaultTheme from 'vitepress/theme'
 import {
   AntDesignContainer,
   ElementPlusContainer,
   NaiveUIContainer
 } from '@vitepress-demo-preview/component'
 import '@vitepress-demo-preview/component/dist/style.css'
 // 导入 Font Awesome 图标
//  import { library } from '@fortawesome/fontawesome-svg-core'
//  import { fas } from '@fortawesome/free-solid-svg-icons'
 // 自定义样式
 import '../../../src/components/style/index.less'
//  import './index.css'
//  library.add(fas)
 export default {
   ...DefaultTheme,
   enhanceApp({ app }) {
     app.component('demo-preview', NaiveUIContainer)
     // 完成了 @vitepress-demo-preview 的配置，接下来就可以在组件文档中编写demo了。
   }
 }