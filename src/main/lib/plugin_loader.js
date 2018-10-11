import fs from 'fs'
import path from 'path'
import {app} from 'electron'


const dir = path.join(app.getPath('userData'), 'plugin')

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

// プラグインDir内読む
// package.jsonから情報を取る
//
fs.readdirSync(dir)
  .forEach(v => {
    let data = fs.readFileSync(path.join(dir, v, 'index.js')).toString()
    exports[v] = eval(data)
  })

console.log(exports)