<template>
    
    <div class="list-content">
        <loading v-if="isLoading"></loading>
        <div class="header" v-else>
            <span><a href="#" class="active">全部</a></span>
            <span><a href="#">精华</a></span>
            <span><a href="#">分享</a></span>
            <span><a href="#">问答</a></span>
            <span><a href="#">招聘</a></span>
        </div>
        <ul class="posts">
            <li class="clearfix" v-for="post in posts" :key="post.id">
                <img class="user_avatar fl" :src="post.author.avatar_url" alt="用户头像">
                <span class="replyAndVisit_count fl">
                    <span class="reply_count">{{post.reply_count}}</span><span class="count_seperator">/</span><span class="view_count">{{post.visit_count}}</span>
                </span>
                <span class="classify fl" :class="[{good:(post.good  == true),top:(post.top  == true),
        other:(post.good  != true && post.top  != true)}]">
                   {{post | tabFormatter}}
                </span>
                <span class="post-title fl">{{post.title}}</span>
                <span class="last_reply fr">{{post.last_reply_at  | formatDate}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import loading from './Loading'
export default {
    name: 'postList',
    data(){
        return {
            isLoading: false,
            posts: []
        }
    },
    methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                limit: 20,
                page: 1
            })
            .then(res=>{
                this.isLoading = false // 加载成功后去除动画
                this.posts = res.data.data
                console.log(this.posts)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    // 在 Vue 实例挂载到 DOM 之前获取数据
    beforeMount(){
        this.isLoading = true
        this.getData();
    },
    components:{
        loading
    }
}
</script>
<style scoped>
    .list-content{
        width: 910px;
        margin: 0 auto;
        border: 1px solid red;
    }
    .header{
        background: #F6F6F6;
        padding: 10px 0 10px 10px;
        font-size: 14px;
    }
    .header span a{
        color: #80bd01;
        margin: 0 10px;
    }
    .header span:hover a{
        color: #005580;
    }
    .header span a.active{
        padding: 3px 4px;
        background: #80BD01;
        color: #fff;
        border-radius: 3px;
    }
    .posts li{
        padding: 10px;
        font-size: 14px;
    }
    .posts li .user_avatar{
        width: 30px;
        height: 30px;
        border-radius: 3px;
        vertical-align: middle;
    }
    .replyAndVisit_count{
        display: inline-block;
        width: 70px;
        text-align: center;
        padding: 5px 0;
    }
    .posts li .reply_count{
        color: #9e78c0;
        font-size: 14px;
    }
    .posts li .view_count{
        font-size: 10px;
        color: #b4b4b4;
    }
    .posts li .classify{
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 12px;
        margin: 5px;
    }
    .posts li .classify.good,
    .posts li .classify.top{
        background: #80BD01;
        color: #fff;
    }
    .posts li .classify.other{
        background-color: #e5e5e5;
        color: #999;
    }
    .posts li .post-title{
        font-size: 16px;
        line-height: 30px;
        max-width: 70%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .posts li .post-title a{
        color: #333;
    }
    .posts li .post-title a:visited{
        color: #888;
    }
    .last_reply{
        color: #778087;
        padding: 5px 0;
    }
</style>

