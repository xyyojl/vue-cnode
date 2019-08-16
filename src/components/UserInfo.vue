<template>
  <div class="userInfo">
    <loading v-if="isLoading"></loading>
    <div v-else>
      <div class="panel userDetail">
        <img :src="userInfo.avatar_url" alt />
        <span class="loginname">{{userInfo.loginname}}</span>
        <p>{{userInfo.score}} 积分</p>
        <p class="create_at">注册时间 {{userInfo.create_at | formatDate}}</p>
      </div>
      <div class="panel">
        <div class="panel-header">最近创建的话题</div>
        <ul class="recent_topics topics">
          <li class="clearfix" v-for="topic in userInfo.recent_topics" :key="topic.id">
            <img class="user_avatar fl" :src="topic.author.avatar_url" alt="用户头像" />
            <router-link
              :to="{
                name: 'post_content',
                params:{
                    id: topic.id
                }
            }"
            >
              <span class="topic-title fl">{{topic.title}}</span>
            </router-link>
            <span class="last_reply fr">{{topic.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
      <div class="panel recent_replies">
        <div class="panel-header">最近参与的话题</div>
        <ul class="recent_topics topics">
          <li class="clearfix" v-for="topic in userInfo.recent_replies" :key="topic.id">
            <img class="user_avatar fl" :src="topic.author.avatar_url" alt="用户头像" />
            <span class="topic-title fl">
              <router-link
                :to="{
                  name: 'post_content',
                  params:{
                      id: topic.id
                  }
              }"
              >
                {{topic.title}}
              </router-link>
            </span>
            <span class="last_reply fr">{{topic.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "./Loading";
export default {
  name: "userInfo",
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
            this.isLoading = false; // 加载成功后去除动画
            this.userInfo = res.data.data;
            console.log(res.data.data);
          }
        })
        .catch(err => {
          //处理返回失败后的问题
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true; //加载成功之前显示加载动画
    this.getData(); //在页面加载之前获取数据
  },
  components: {
    loading
  }
};
</script>

<style scoped>
.userInfo {
  width: 910px;
}
.userDetail {
  background: #fff;
  padding: 10px;
  line-height: 2em;
}
.userDetail img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  vertical-align: middle;
}
.userDetail .loginname {
  color: #778087;
  /* vertical-align: middle; */
}
.userDetail .create_at {
  font-size: 14px;
  color: #ababab;
}
.userInfo .panel {
  margin-bottom: 13px;
}
.userInfo .panel .panel-header {
  padding: 10px;
  background-color: #f6f6f6;
}

.topics li {
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
}
.topics li:hover {
  background-color: #f5f5f5;
}
.topics li .user_avatar {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  vertical-align: middle;
}
.topics li .topic-title {
  font-size: 16px;
  line-height: 30px;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}
.topics li a {
  color: #08c;
  text-decoration: none;
}
.topics li a:hover {
  text-decoration: underline;
  color: #005580;
}
.topics li a:visited {
  color: #888;
}
.last_reply {
  color: #778087;
  padding: 5px 0;
}
</style>
