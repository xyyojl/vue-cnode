<template>
  <div id="app">
    <Header></Header>
    <div class="main clearfix">
      <router-view name="main"></router-view>
      <router-view name="sideBar"></router-view>
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
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
  }
</style>
