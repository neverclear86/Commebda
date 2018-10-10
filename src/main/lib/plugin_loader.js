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
    const p = path.resolve(v)
    let mod = require(p)
    console.log(mod)
    // let packageFile = path.join(v, 'package.json')
    // const info = require(packageFile)
    // console.log(info)
  })

//
// module.exports = (vue) => {
//   setInterval(() => {
//     vue.commentList.push({
//       "thumbnail":"https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no",
//       "username":"aaaaa",
//       "comment":"hogehoge",
//       "platform":"YouTube",
//     })
//   }, 1000)
// }