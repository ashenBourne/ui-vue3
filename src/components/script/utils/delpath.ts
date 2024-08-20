/*
 * @Date: 2024-08-19 21:30:21
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-08-20 11:21:19
 * @FilePath: \ui-vue3\src\components\script\utils\delpath.ts
 */
import * as fs from 'fs'
import { resolve } from 'path';
import { pkgPath } from './paths';
//保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/zy-ui`) fs.rmdirSync(path);
  }
};
export default delPath;
