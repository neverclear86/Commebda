<template>
  <div id="app">
    <div id="comment">
      <el-table :data="commentList" width="100%">
        <el-table-column prop="name" label="UserName" :width="width"></el-table-column>
        <el-table-column prop="comment" label="Comments"></el-table-column>
        <el-table-column prop="platform" label="Platform"></el-table-column>
      </el-table>
    </div>
    <div id="chat">
      <el-input placeholder="Comment" id="input"></el-input>
      <el-select v-model="selectPlatform" placeholder="Select Platform" id="platform">
        <el-option v-for="item in platforms"
          :key="item.value" :lavel="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import ElSelectDropdown from 'element-ui/packages/select/src/select-dropdown'
  export default {
    name: 'CommentViewer',
    components: {ElSelectDropdown},
    data() {
      return {
        commentList: [
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
          {"name": "aaaaa", "comment": "hogehoge", "platform": "YouTube"},
          {"name": "bbbbb", "comment": "hugahuga", "platform": "YouTube"},
        ],
        width: 100,
        platforms: [
          {"value": "YouTube", "label": "YouTube"},
        ],
        selectPlatform: '',
      }
    }
  }
</script>

<style scoped>
  #comment {
    margin-bottom: 40px;
  }
  #chat {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .el-input {
    width: 80%;
  }
  
  .el-select {
    position: absolute;
    right: 0;
    width: 20%;
  }
</style>