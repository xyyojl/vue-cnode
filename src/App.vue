<template>
  <div id="app">
    <cnode-header></cnode-header>
    <postList></postList>
  </div>
</template>

<script>
import header from './components/header'
import postList from './components/postList'
export default {
  name: 'App',
  components:{
    'cnode-header': header,
    postList
  }
}
</script>

<style>
  @import 'assets/css/reset.min.css'
</style>
