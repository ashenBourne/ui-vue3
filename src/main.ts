/*
 * @Date: 2024-07-13 18:31:29
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-16 20:19:28
 * @FilePath: \ts\ui-vue3\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from "./components/button/index" 
let app=createApp(App);
app.use(Button)
app.mount('#app')
