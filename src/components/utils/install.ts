/*
 * @Date: 2024-07-16 20:04:01
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-16 20:24:49
 * @FilePath: \ts\ui-vue3\src\components\utils\install.ts
 */
import { camelize } from './format';

import type { App, Component } from 'vue';

type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

export function withInstall<T extends Component>(options: T) {
  // TS语法：意思是options作为断言对象，key是string类型，value未知
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
      // camelize作用是将-变为大驼峰，比如-button==>Button
      console.log(camelize(`-${name}`))
      app.component(camelize(`-${name}`), options);
    }
  };

  return options as WithInstall<T>;
}
