# commebda

> コメントビューアプラットフォーム

## 概要､やりたいこと
- 複数プラットフォーム同時接続対応
  - YouTube
  - OPENREC
  - Twitch
  - ニコ生
  - Mixer
  - 他できれば
- 本体には最低限の機能
  - プラグインで機能をつける
      - コメント取得もプラグインにする
      - プラグインでアンケート機能､茶番システムなど作り放題
      - 特定人物のハイライト
- コメジェネにもなる(OBSで簡単取り込み)ようにする
  - これも多分プラグイン

## 技術
- Node.js
  - Electron
  - Vue.js
    - electron-vue
  - sass

## Coreの機能
- コメント表示の基盤
- タブ表示
- プラグイン読み込み
- プラグインAPIの提供

---

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[dab4535](https://github.com/SimulatedGREG/electron-vue/tree/dab4535ddea5bb2f8cb754c117d75cc1af2d1f5b) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
