<template>
    <div class="list-content">
        <div class="header">
            <span><a href="#" class="active">全部</a></span>
            <span><a href="#">精华</a></span>
            <span><a href="#">分享</a></span>
            <span><a href="#">问答</a></span>
            <span><a href="#">招聘</a></span>
        </div>
        <ul class="posts">
            <li class="clearfix">
                <div class="fl">
                    <img class="user_avatar" src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt="用户头像">
                    <span>
                        <span class="reply_count">55</span>
                        <span class="count_seperator">/</span>
                        <span class="view_count">110333</span>
                    </span>
                    <span class="post-title">Node 12 值得关注的新特性</span>
                </div>
                <span class="last_reply fr">3天前</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'postList'
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
    .posts li .reply_count{
        color: #9e78c0;
        font-size: 14px;
    }
    /* count_seperator view_count  view_count post-title last_reply*/
    .posts li .view_count{
        font-size: 10px;
        color: #b4b4b4;
    }
    .posts li .post-title{
        font-size: 16px;
        line-height: 30px;
        max-width: 70%;
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

