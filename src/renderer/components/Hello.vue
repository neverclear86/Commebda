<template>
  <div id="app">
    <el-main>
      <h1>hello</h1>
      <router-link to="landing">LandingPage</router-link>
      <el-input v-model="input" placeholder="this way..." clearable></el-input>
      <h2>{{ input }}</h2>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>

</style>