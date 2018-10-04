import path from 'path'
import { app } from 'electron'
import DataStore from 'nedb'

let db = new DataStore({
  filename: path.join(app.getPath('userData'), 'comment.db'),
  autoload: true,
})

[
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "First", "comment": "h", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "ho", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hog", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hoge", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogeh", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogeho", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehog", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogef", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefu", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefug", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefuga", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugaf", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafu", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafug", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafuga", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafugaf", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafugafo", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "aaaaa", "comment": "hogehogefugafugafoo", "platform": "YouTube"},
  {"thumbnail": "https://yt3.ggpht.com/a-/AN66SAxyRxpe-l5OgqQwH8QantkTCNs0GrP0NgoQBA=s288-mo-c-c0xffffffff-rj-k-no" , "username": "Last", "comment": "hogehogefugafugafoob", "platform": "YouTube"},

].forEach(db.insert)
