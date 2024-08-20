/*
 * @Date: 2024-08-20 18:16:51
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 18:26:03
 * @FilePath: \ui-vue3\src\components\index.ts
 */
import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
