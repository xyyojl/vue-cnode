<template>
  <div id="app">
    <Header></Header>
    <div class="main clearfix">
      <router-view name="main"></router-view>
      <router-view name="sideBar"></router-view>
    </div>
    <Footer></Footer>
    <div class="backtotop" v-if="isShow" @click="backTop">回到顶部</div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    PostList,
    Footer
  },
  data () {
    return {
      isShow: false,
      scrollTop : 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods:{
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 195) {
        that.isShow = true
      } else {
        that.isShow = false
      }
    }
  }
}
</script>

<style>
  .main{
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 600px;
  }
  .backtotop{
    position: fixed;
    top: 345px;
    right: 0px;
    width: 24px;
    color: gray;
    padding: 12px 0 12px 5px;
    cursor: pointer;
    z-index: 2;
    background: #fff;
    border-radius: 12px 0 0 12px;
    font-size: 14px;
  }
</style>
