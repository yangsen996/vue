<template>
  <div>
      <h2>用户界面</h2>
      <p>hahaha</p>
      <h3>{{userId}}</h3>
  </div>
</template>

<script>
export default {
name: 'User',
computed:{
    userId(){
        return this.$route.params.userId
    }
}
}
</script>

<style>

</style>