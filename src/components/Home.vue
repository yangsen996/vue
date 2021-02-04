<template>
  <div>
      <h2>首页</h2>
      <p>首页内容</p>
      <router-link to="/home/news" tag="button">新闻</router-link>
      <router-link to="/home/message">信息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style>

</style>