/*
 * @Date: 2024-08-19 21:30:21
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 20:36:53
 * @FilePath: \ui-vue3\src\components\script\build\index.ts
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除zy-ui

export const removeDist = () => {
  return delPath(`${pkgPath}/zy-ui`);
};

//打包样式
export const buildStyle = () => {
  return src([`${componentPath}/style/**.less`,`${componentPath}/style/**/**.less`])
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/zy-ui/lib/style`))
    .pipe(dest(`${pkgPath}/zy-ui/es/style`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
