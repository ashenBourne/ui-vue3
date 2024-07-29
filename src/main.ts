/*
 * @Date: 2024-07-13 18:31:29
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-29 17:53:07
 * @FilePath: \UIPackage\ts\ui-vue3\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import "@/components/style/index.less"
import App from './App.vue'
let app=createApp(App);
app.mount('#app')
