import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'
import indexSideBar from '../components/indexSideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main: PostList,
        sideBar: indexSideBar
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components:{
        main: Article,
        sideBar: SideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components:{
        main: UserInfo
      }
    }
  ]
})
