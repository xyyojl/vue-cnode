<template>
  <div id="app">
    <cnode-header></cnode-header>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'App',
  components:{
    'cnode-header': header
  }
}
</script>

<style>
  @import 'assets/css/reset.min.css'
</style>
