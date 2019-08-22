<template>
    <div class="PostList fl">
        <!--在数据未返回的时候，显示这个正在加载的gif-->
        <loading v-if="isLoading"></loading>
        <!--代表我門的主题帖子列表-->
        <div class="list-content" v-else>
            <div class="header">
                <span><a href="#" @click="changeTab('')" :class="{active:tab === ''}">全部</a></span>
                <span><a href="#" @click="changeTab('good')" :class="{active:tab === 'good'}">精华</a></span>
                <span><a href="#" @click="changeTab('share')" :class="{active:tab === 'share'}">分享</a></span>
                <span><a href="#" @click="changeTab('ask')" :class="{active:tab === 'ask'}">问答</a></span>
                <span><a href="#" @click="changeTab('job')" :class="{active:tab === 'job'}">招聘</a></span>
            </div>
            <ul class="posts">
                <li class="clearfix" v-for="post in posts" :key="post.id">
                    <!--头像-->
                    <router-link :to="{
                        name:'user_info',
                        params:{
                            name:post.author.loginname
                        }
                    }">
                        <img class="user_avatar fl" :title="post.author.loginname" :src="post.author.avatar_url" alt="用户头像">
                    </router-link>
                    <!--回复/浏览-->
                    <span class="replyAndVisit_count fl">
                        <span class="reply_count" title="回复数">{{post.reply_count}}</span><span class="count_seperator">/</span><span class="view_count" title="点击数">{{post.visit_count}}</span>
                    </span>
                    <!--帖子的分类-->
                    <span class="classify fl" :class="[{good:(post.good  == true),top:(post.top  == true),
            other:(post.good  != true && post.top  != true)}]">
                    {{post | tabFormatter}}
                    </span>
                    <!--标题-->
                    <span class="post-title fl" :title="post.title">
                        <router-link :to="{
                            name: 'post_content',
                            params:{
                                id: post.id,
                                name: post.author.loginname
                            }
                        }">
                            {{post.title}}
                        </router-link>
                    </span>
                    
                    <!--最終回复时间-->
                    <span class="last_reply fr">{{post.last_reply_at  | formatDate}}</span>
                </li>
                <li>
                    <!-- 分页 -->
                    <pagination @handleList="renderList" :tab="tab"></pagination>
                </li>
            </ul>
            
        </div>
    </div>
</template>
<script>
import loading from './Loading'
import pagination from './Pagination'
export default {
    name: 'postList',
    data(){
        return {
            isLoading: false,
            posts: [], //代表页面的列表数组
            postpage:1,
            tab:''
        }
    },
    methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                params:{
                    limit: 20,
                    page: this.postpage,
                    tab:this.tab
                }
            })
            .then(res=>{
                this.isLoading = false // 加载成功后去除动画
                this.posts = res.data.data
            })
            .catch(err=>{
                //处理返回失败后的问题
                console.log(err)
            })
        },
        renderList(value){
            this.postpage = value;
            // 重新获取数据
            this.getData();
        },
        changeTab(value){
            this.tab = value;
            this.getData();
        }
    },
    // 在 Vue 实例挂载到 DOM 之前获取数据
    beforeMount(){
        this.isLoading = true//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
    },
    components:{
        loading,
        pagination
    }
}
</script>
<style scoped>
    .list-content{
        width: 892px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .header{
        background: #F6F6F6;
        padding: 10px 0 10px 10px;
        font-size: 14px;
        border-radius: 3px 3px 0 0;
    }
    .header span a{
        color: #80bd01;
        margin: 0 10px;
        text-decoration: none;
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
        background-color: #fff;
    }
    .posts li:not(:last-child):hover{
        background-color: #f5f5f5;
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
    .posts li a{
        color: #333;
        text-decoration: none;
    }
    .posts li a:hover{
        text-decoration: underline;
    }
    .posts li a:visited{
        color: #888;
    }
    .last_reply{
        color: #778087;
        padding: 5px 0;
    }
</style>

