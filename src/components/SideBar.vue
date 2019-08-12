<template>
  <div class="sideBar fr">
    <div class="panel authorInfo">
      <div class="panel-header">作者</div>
      <div class="authorDetail">
          <router-link
                  :to="{
                        name: 'user_info',
                        params:{
                          name:userInfo.loginname
                        }
                    }"
                >
            <img :src="userInfo.avatar_url" alt />
          </router-link>
        <span class="loginname">
          <router-link
        :to="{
              name: 'user_info',
              params:{
                name:userInfo.loginname
              }
          }"
      >  
          {{userInfo.loginname}}
          </router-link>
        </span>
      
      <p>积分: {{userInfo.score}}</p>
      </div>
    </div>
    <div class="panel recent_topics">
      <div class="panel-header">作者最近主题</div>
      <ul class="recent">
        <li v-for="topic in topicsLimitBy5" :key="topic.id">
            <router-link :to="{
                name:'post_content',
                params:{
                    id: topic.id,
                    name: topic.author.loginname
                }
            }">
                {{topic.title}}
            </router-link>
        </li>
      </ul>
    </div>
    <div class="panel recent_replies">
      <div class="panel-header">作者最近回复</div>
      <ul class="recent">
        <li v-for="topic in repliesLimitBy5" :key="topic.id">
            <router-link :to="{
                name:'post_content',
                params:{
                    id: topic.id,
                    name: topic.author.loginname
                }
            }">
                {{topic.title}}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isLoading: false,
      userInfo: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          if (res.data.success == true) {
            this.userInfo = res.data.data;
          }
        })
        .catch(err => {
          //处理返回失败后的问题
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getData(); //在页面加载之前获取数据
  },
  computed:{
      topicsLimitBy5(){
          if(this.userInfo.recent_topics){
              return this.userInfo.recent_topics.slice(0,5);
          }
      },
      repliesLimitBy5(){
          if(this.userInfo.recent_replies){
              return this.userInfo.recent_replies.slice(0,5);
          }
      }
  }
};
</script>

<style scoped>
.sideBar {
  width: 290px;
  font-size: 14px;
}
.panel {
  border-radius: 3px 3px 0 0;
  margin-bottom: 13px;
  background: #fff;
}
.panel-header {
  padding: 10px;
  background-color: #f6f6f6;
  color: #444;
}
.authorInfo img {
  width: 48px;
  height: 48px;
  border-radius: 3px;
  vertical-align: middle;
}
.authorInfo .loginname a{
  color: #778087;
  vertical-align: middle;
}
.authorDetail{
    padding: 10px;
}
.authorInfo p{
    line-height: 2em;
}
.panel .recent{
    padding: 10px;
}
.panel .recent li{
    line-height: 2em;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 270px;
    font-size: 14px;
}
.panel .recent li a{
    color: #778087;
}
/* color: #778087; */
</style>
