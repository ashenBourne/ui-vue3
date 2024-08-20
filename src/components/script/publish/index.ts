/*
 * @Date: 2024-08-19 21:30:21
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 18:54:44
 * @FilePath: \ui-vue3\src\components\script\publish\index.ts
 */
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/zy-ui`);
};
export default series(async () => publishComponent());
