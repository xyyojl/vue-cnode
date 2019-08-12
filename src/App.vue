<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
export default {
  name: 'App',
  components:{
    Header,
    PostList
  }
}
</script>

<style>
  /* body{
    margin: 0;
    background-color: #e1e1e1;
  }
  .clearfix:after {
      display: block;
      height: 0;
      content: "";
      clear: both
  }
  *{box-sizing: border-box;}
  .fl{float: left;}
  .fr{float: right;}  */
  .main{
    width: 80%;
    margin: 15px auto;
  }
</style>
