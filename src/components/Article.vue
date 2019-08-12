<template>
    <div class="article fl">
        <loading v-if="isLoading"></loading>
        <div v-else>
            <div class="topic_header">
                <div class="topic_title">
                    <span class="classify good"  :class="[{good:(post.good  == true),top:(post.top  == true),
            other:(post.good  != true && post.top  != true)}]">{{post | tabFormatter}}</span>
                    {{post.title}}
                </div>
                <div class="topic_info">
                    <span>• 发布于 {{post.last_reply_at | formatDate}}</span>
                    <span>• 作者 {{post.author.loginname}} </span>
                    <span>• {{post.visit_count}} 次浏览</span>
                    <span>• 来自 {{post.tab}}</span>
                </div>
            </div>
            <div class="topic_content markdown-body" v-html="post.content"></div>
            <div class="reply_panel panel">
                <div class="header">
                    {{post.replies.length}} 回复
                </div>
                <div class="reply_item clearfix" v-for="(reply,index) in post.replies" :key="reply.id">
                    <router-link :to="{
                        name:'user_info',
                        params: {
                            name: reply.author.loginname
                        }
                    }">
                        <img :src="reply.author.avatar_url" alt="">
                    </router-link>
                    <div class="user_info">
                        <router-link :to="{
                            name:'user_info',
                            params: {
                                name: reply.author.loginname
                            }
                        }">
                            <span>{{reply.author.loginname}}</span>
                        </router-link>
                        <span>{{(index+1)}}楼•{{reply.create_at  | formatDate}}</span>
                    </div>
                    <span class="awesome" v-if="reply.ups.length>0"><i>👍</i> {{reply.ups.length}}</span>
                    <p class="reply_content markdown-body"  v-html="reply.content"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import loading from './Loading'
export default {
    name: 'Article',
    data(){
        return {
            isLoading: false,
            post: {}
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then(res=>{
                if(res.data.success == true){
                    this.isLoading = false // 加载成功后去除动画
                    this.post = res.data.data
                }
            })
            .catch(err=>{
                //处理返回失败后的问题
                console.log(err)
            })
        }
    },
    // 在 Vue 实例挂载到 DOM 之前获取数据
    beforeMount(){
        this.isLoading = true//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
    },
    components:{
        loading
    },
    watch:{
        '$route'(to,from){
        // 通过 id 获取文章详情
        this.getData()
        }
    }
}
</script>
<style>
    @import url('../assets/css/markdown-text.css');
    /* .article{
        margin-right: 305px;
    } */
    .topic_header{
        width: 892px;
        color: #333;
        background: #fff;
        padding: 10px;
    }
    .topic_title{
        font-size: 22px;
        margin: 8px 0;
    }
    .classify{
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 12px;
        margin: 5px;
    }
    .classify.good,
    .classify.top{
        background: #80BD01;
        color: #fff;
    }
    .classify.other{
        background-color: #e5e5e5;
        color: #999;
    }
    .topic_info{
        color: #838383;
        font-size: 12px;
    }
    .panel .header{
        width: 892px;
        font-size: 14px;
        color: #333;
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
    }
    .topic_content{
        width: 892px;
        padding: 15px;
        border-top: 1px solid #e5e5e5;
        background-color: #fff; 
        margin-bottom: 13px;
    }
    .reply_item{
        width: 892px;
        padding: 10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
    }
    .reply_item img{
        width: 30px;
        height: 30px;
        float: left;
        border-radius: 3px;
    }
    .reply_item .user_info{
        display: inline-block;
        margin-left: 10px;
    }
    .reply_item .awesome{
        float: right;
    }
    .reply_item .reply_content{
        padding-left: 50px;
        font-size: 14px;
        margin: 5px 0 15px;
    }
</style>

