<template>
    <div class="header">
        <div class="container clearfix">
            <div class="left-nav">
                <img src="../assets/cnodejs_light.svg" alt="">
                <form>
                    <input type="text">   
                </form>
            </div>            
            <ul class="nav">
                <li><a href="#">首页</a></li>
                <li><a href="#">新手入门</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">关于</a></li>
                <li><a href="#">注册</a></li>
                <li><a href="#">登录</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'header'
}
</script>
<style scoped>
    .header{
        height: 50px;
        background: #444444;
    }
    .container{
        width: 1244px;
        margin: 0 auto;
    }
    .container .left-nav{
        float: left;
    }
    .container .nav{
        float: right;
    }
    .container img{
        float: left;
        width: 120px;
        height: 28px;
        margin-top: 8px;
        margin-right: 24px;
    }
    .container form{
        float: left;
        margin-top: 12px;
    }
    .container input{
        width: 233px;
        height: 26px;
        border-radius: 15px;
        border: none;
        background: url(../assets/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
        transition: all .3s;
        padding-left: 22px;
    }
    .container input:hover{
        background-color: #fff;
    }
    .nav{
        padding: 15px 0;
    }
    .nav li{
        float: left;
        margin: 0 15px;
        font-size: 14px;
    }
    .nav li:first-child{
        margin-left: 0;
    }
    .nav li a{
        text-shadow: none;
        color: #ccc;
    }
    .nav li a:hover{
        color: #fff;
    }
</style>

