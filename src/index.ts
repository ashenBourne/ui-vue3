/*
 * @Date: 2024-08-01 18:05:55
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-19 11:13:12
 * @FilePath: \UIPackage\ts\ui-vue3\src\index.ts
 */
import * as components from './components/index';
export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};