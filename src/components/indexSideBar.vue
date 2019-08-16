<template>
    <div class="sideBar fr">
        <div class="panel sideBar-panel1">
            <div class="inner">
                <p>CNode：Node.js专业中文社区</p>
                <span>您可以 <a href="#">登录</a> 或  <a href="#">注册</a> , 也可以</span>
                <button class="github-info">通过 GitHub 登录</button>
            </div>
        </div>
        <div class="panel noreply-topic">
            <div class="header">无人回复的话题</div>
            <div class="inner">
                <ul>
                    <li v-for="topic in noreplyTopic" :key="topic.id">
                        <router-link :to="{
                            name:'post_content',
                            params:{
                                id:topic.id,
                                name:topic.loginname
                            }
                        }">
                            {{topic.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel scoreboard">
            <div class="header">
                积分榜   <a href="#" class="mock-anchor">TOP 100 >> </a>
            </div>
            <div class="inner">
                <ul>
                    <li v-for="(item,index) in scoreBoard" :key="index">
                        <span>{{item.score}}</span>
                        <router-link :to="{
                            name: 'user_info',
                            params:{
                                name:item.loginname
                            }
                        }">
                            {{item.loginname}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel community">
            <div class="header">友情社区</div>
            <div class="inner">
                <ul>
                    <li><a href="https://ruby-china.org/"><img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""></a></li>
                    <li><a href="https://ruby-china.org/"><img src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt=""></a></li>
                    <li><a href="https://ruby-china.org/"><img src="//static2.cnodejs.org/public/images/phphub-logo.png" alt=""></a></li>
                    <li><a href="https://ruby-china.org/"><img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="panel panel-client">
            <div class="header">客户端二维码</div>
            <div class="inner">
                <img src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="">
                <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'indexSideBar',
    data(){
        return {
            'noreplyTopic':[
                {
                    id:'5d54c518697873456c6bd792',
                    title:'concent 1.5蓄势待发，hook&setup给你不一样的体验',
                    loginname:'fantasticsoul'
                },
                {
                    id:'5d54b48112a0194544416afe',
                    title:'node.js 交流群，node.js 在后端的应用',
                    loginname:'zuohuadong'
                },
                {
                    id:'5d540593697873456c6bd5be',
                    title:'分享撸一个git branch name 校验工具的过程',
                    loginname:'JsonMa'
                },
                {
                    id:'5d53fedb12a01945444169ea',
                    title:'分享一次阿里云 nodejs oss sdk 判断文件是否存在',
                    loginname:'luanxuechao'
                },
                {
                    id:'5d53c28212a01945444168a6',
                    title:'求教egg-init出来的项目 无法热启动。。',
                    loginname:'jiashuai1002'
                }
            ],
            scoreBoard:[
                {
                    loginname:'i5ting',
                    score:'21555'
                },
                {
                    loginname:'alsotang',
                    score:'15570'
                },
                {
                    loginname:'leapon',
                    score:'9350'
                },
                {
                    loginname:'atian25',
                    score:'8885'
                },
                {
                    loginname:'jiyinyiyong',
                    score:'8780'
                },
                {
                    loginname:'yakczh',
                    score:'7245'
                },
                {
                    loginname:'im-here',
                    score:'6780'
                },
                {
                    loginname:'DevinXian',
                    score:'6075'
                },
                {
                    loginname:'chapgaga',
                    score:'5815'
                },
                {
                    loginname:'magicdawn',
                    score:'5350'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .panel{
        margin-bottom: 14px;
        font-size: 14px;
        width: 290px;
        background: #fff;
        border-radius: 3px;
    }
    .panel .header{
        width: 100%;
        padding: 10px;
        background-color: #f6f6f6;
    }
    .panel .inner{
        padding: 10px;
    }
    
    .sideBar-panel1 .inner p{
        margin-bottom: 10px;
    }
    .sideBar-panel1 .inner .github-info{
        padding: 3px 10px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        background-color: #5bc0de;
        border-radius: 3px;
        transition: all .2s ease-in-out;
        border: none;
        line-height: 2em;
        letter-spacing: 2px;
        margin-top: 4px;
    }
    .noreply-topic .inner ul li{
        line-height: 2em;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        max-width: 270px;
        font-size: 14px;
    }
    .noreply-topic ul li a{
        color: #778087;
    }
    .scoreboard .mock-anchor{
        color:#666;
    }
    .scoreboard .inner span:first-child{
        display: inline-block;
        width: 50px;
        margin-right: 10px;
        padding: 2px;
        color: gray;
    }
    .scoreboard .inner a{
        color: #778087;
    }
    .community img{
        width: 150px;
    }
    .community .inner li{
        margin-bottom: 10px;
    }
    .panel-client .inner{
        text-align: center;
    }
    .panel-client img{
        width: 200px;
    }
    .panel-client a{
        display: block;
        color: #778087;
        
    }
    .panel-client a:hover{
        text-decoration: underline;
    }
</style>