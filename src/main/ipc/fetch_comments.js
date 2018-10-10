import {app, ipcMain} from 'electron'
import DataStore from 'nedb'
import path from 'path'

//
// ipcMain.on('fetchComments', async event => {
//   let db = new DataStore({
//     filename: path.join(app.getPath('userData'), 'comment.db'),
//     autoload: true,
//   })
//
//   db.find({}, (err, docs) => {
//     if (err) { throw err }
//     event.sender.send('receiveComments', docs)
//   })
// })
