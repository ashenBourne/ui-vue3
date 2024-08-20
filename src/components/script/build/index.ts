/*
 * @Date: 2024-08-19 21:30:21
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 16:25:36
 * @FilePath: \UIPackage\ts\ui-vue3\src\components\script\build\index.ts
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
  return src(`${componentPath}/src/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/zy-ui/lib/src`))
    .pipe(dest(`${pkgPath}/zy-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  console.log("执行打包组件")
  run('pnpm run build', componentPath);
  console.log("打包结束")
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
