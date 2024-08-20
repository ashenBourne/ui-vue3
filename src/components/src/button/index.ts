/*
 * @Date: 2024-07-16 20:06:27
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-01 11:55:25
 * @FilePath: \ts\ui-vue3\src\components\button\index.ts
 */
import { withInstall } from '../../utils/install';
import _Button from './Button';
export const Button = withInstall(_Button);
export default Button;

declare module 'vue' {
  export interface GlobalComponents {
    ZYButton: typeof Button;
  }
}
