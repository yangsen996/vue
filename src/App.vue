<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">平台</button>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'lisi',
    }
  },
  methods: {
    homeClick() {
      //通过代码的方式修改路径
      //this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      this.$router.replace('/about')
      //this.$router.push('/about')
      console.log('aboutClick');
    }
  }
}
</script>

<style>
/* .router-link-active{
  color: red;
} */
/* .active{
  color: pink;
} */
</style>
