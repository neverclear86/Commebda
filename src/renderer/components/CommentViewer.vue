<template>
  <div id="app">
    <div id="comment">
      <el-table :data="commentList"
                width="100%" height="calc(100vh - 48px)" border stripe
                header-cell-class-name="header">
        <el-table-column type="index" label="#" width="30px"></el-table-column>
        <el-table-column prop="thumbnail" label="Icon" width="48">
          <template slot-scope="scope">
            <img class="icon" :src="scope.row.thumbnail">
          </template>
        </el-table-column>
        <el-table-column prop="username" label="UserName" width="100px"></el-table-column>
        <el-table-column prop="comment" label="Comments"></el-table-column>
        <el-table-column prop="platform" label="Platform" width="120px"></el-table-column>
      </el-table>
    </div>
    <el-input placeholder="Comment" class="input">
      <el-select v-model="selectPlatform" placeholder="Platform" slot="append" class="platform">
        <el-option v-for="item in platforms"
                   :key="item.value" :lavel="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-input>
  </div>
</template>

<script>
  import ElSelectDropdown from 'element-ui/packages/select/src/select-dropdown'
  import { ipcRenderer } from 'electron'

  export default {
    name: 'CommentViewer',
    components: {ElSelectDropdown},
    data() {
      return {
        commentList: [],
        platforms: [
          {"value": "YouTube", "label": "YouTube"},
        ],
        selectPlatform: '',
      }
    },
    created: function() {
      // ipcRenderer.on('receiveComments', (event, arg) => {
      //   this.commentList = arg
      // })
      //
      // ipcRenderer.on('addComment', (event, arg) => {
      //   this.commentList.push(arg)
      // })

      // ipcRenderer.send('fetchComments')

      ipcRenderer.on('getFunc', (event, arg) => {
        console.log(arg)
      })

      ipcRenderer.send('getFunc')
    },
  }
</script>

<style lang="scss">
  .input {
    position: fixed;
    bottom: 0;
    width: 100%;

    .platform {
      width: 120px;
    }

  }

  .header {
    padding: 0;
  }

  .el-table th {
    padding: 0;
  }

  .icon {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>