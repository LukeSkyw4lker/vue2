<template>
    <div class="body">
          <!-- 1.设置背景色 -->
        <v-header :nickname="data.userNickname"></v-header>
       <div class="content">
        <!-- 2.父元素盒子 -->
        <div class="news_box">
            <!-- 3.左边新闻栏 -->
            <div class="news" @click="showpop">
                <!-- 3.1新闻盒子 -->
                <a href="#" title="莫迪访美之行收获满满，亚马逊谷歌加码投资印度，并呼吁全球公司进行「印度制造」，哪些信息值得关注？">
                <img class="news_img" src="../assets/img/v2-5182986eb59a2bc402dc13f93cda967d_400x224.png" alt="莫迪访美之行收获满满，亚马逊谷歌加码投资印度，并呼吁全球公司进行「印度制造」，哪些信息值得关注？">
                <div class="textbox">
                    <!--3.1.1标题 -->
                    <h2 class="text">莫迪访美之行收获满满，亚马逊谷歌加码投资印度，并呼吁全球公司进行「印度制造」，哪些信息值得关注？</h2>
                    <div class="editor">
                       
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
                </a>
            </div>
            <div class="news" @click="showpop">
                <a href="#" title="克宫发布视频，普京自「瓦格纳事件」结束以来首次发表公开讲话，称赞本国工业的稳定运营，释放了什么信号？">
                <img class="news_img" style="width: 165px;" src="../assets/img/v2-dd67f2ad7c96168f52b94c42b5f15e77_400x224.png" alt="克宫发布视频，普京自「瓦格纳事件」结束以来首次发表公开讲话，称赞本国工业的稳定运营，释放了什么信号？">
                <div class="textbox"><h2 class="text">克宫发布视频，普京自「瓦格纳事件」结束以来首次发表公开讲话，称赞本国工业的稳定运营，释放了什么信号？</h2>
                    <div class="editor">
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
                </a>
            </div>
            <div class="news" @click="showpop">
                <a href="#" title="为什么长辈们认为汉堡、炸鸡是垃圾食品，而粽子、面条、馒头、烧卖、米饭、汤圆、饺子、油条、月饼却不是？">
                <img class="news_img" src="../assets/img/v2-320eff4799a0d57c3f25a415d20a7f59_400x224.png" alt="为什么长辈们认为汉堡、炸鸡是垃圾食品，而粽子、面条、馒头、烧卖、米饭、汤圆、饺子、油条、月饼却不是？">
                <div class="textbox"><h2 class="text">为什么长辈们认为汉堡、炸鸡是垃圾食品，而粽子、面条、馒头、烧卖、米饭、汤圆、饺子、油条、月饼却不是？</h2>
                    <div class="editor">
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
                </a>
            </div>
            <div class="news" @click="showpop">
                <a href="#" title="游戏设计中，主角面对体型巨大的敌人，如何避免「修脚趾」式的对决？">
                <img class="news_img" src="../assets/img/v2-4bca63a15a0e3f8264d529d31389b521_400x224.png" alt="游戏设计中，主角面对体型巨大的敌人，如何避免「修脚趾」式的对决？">
                <div class="textbox"><h2 class="text">游戏设计中，主角面对体型巨大的敌人，如何避免「修脚趾」式的对决？</h2>
                    <div class="editor">
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
            </a>
            </div>
            <div class="news" @click="showpop">
                <a href="#" title="崩坏：星穹铁道》中的艾丝妲为什么愿意给黑塔打「白工」？">
                <img class="news_img" src="../assets/img/v2-a61e2659a652968638469985529c57b8_400x224.png" alt="《崩坏：星穹铁道》中的艾丝妲为什么愿意给黑塔打「白工」？">
                <div class="textbox"><h2 class="text">《崩坏：星穹铁道》中的艾丝妲为什么愿意给黑塔打「白工」？</h2>
                    <div class="editor">
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
            </a> 
            </div>
            <div class="news" @click="showpop">
                <a href="#" title="如何评价动画《机动战士高达 水星的魔女》第二季第 11 集（总第 23 集）？">
                <img class="news_img" src="../assets/img/v2-126a6040ecf19559f028f7fc2d2c40db_400x224.png" alt="如何评价动画《机动战士高达 水星的魔女》第二季第 11 集（总第 23 集）？">
                <div class="textbox"><h2 class="text">如何评价动画《机动战士高达 水星的魔女》第二季第 11 集（总第 23 集）？</h2>
                    <div class="editor">
                        <img src="../assets/img/用户.png" alt="">
                        <span>编辑人</span>
                        <img src="../assets/img/赞.png" alt="">
                        <span>1125</span>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div class="recommend">
            <!-- 4.右边推荐栏 -->
            <h2>推荐榜</h2>
            <div class="ranking">
                <!-- 4.1排行榜 -->
                <ul>
                    <li @click="showpop">从世界工厂迈向智造强国</li>
                    <li @click="showpop">莫迪访美之行收获满满，亚马逊谷歌加码投资印度，并呼吁全球公司进行「印度制造」，哪些信息值得关注？</li>
                    <li @click="showpop">李嘉诚家族被指「趁火打劫」连续抄底两上市房企自救关键项目，此举出于什么战略考量？</li>
                    <li @click="showpop">烧烤店因亲戚孩子来店里帮忙被罚 2.5 万，官方称属「雇佣童工」，如何从法律角度解读此事？</li>
                    <li @click="showpop">高考完想换两万的游戏本，爸妈觉得太贵，准大学生想用两万的游戏本奢侈吗？</li>
                    <li @click="showpop">上市公司祝贺总经理女儿高考 710 分，单科创佳绩，律师称「不违规，但属不当披露」，哪些信息值得关注？</li>
                    <li @click="showpop">那些曾离开「北上广」的年轻人们，正考虑重返大城市，如今对年轻人而言，大城市还具有吸引力吗？</li>
                    <li @click="showpop">韩外长称没理由与中国「结怨交恶」，外交部回应「中韩关系稳定发展符合双方利益」，如何看待韩方态度的转变？</li>
                    <li @click="showpop">为什么长辈们认为汉堡、炸鸡是垃圾食品，而粽子、面条、馒头、烧卖、米饭、汤圆、饺子、油条、月饼却不是？</li>
                    <li @click="showpop">《云顶之弈》选「静水监狱」应该被骂吗？</li>
                </ul>
            </div>
        </div>
       </div>
       <!-- 弹窗内容 -->
       <div class="pop_content" v-if="ifshow">
            <div class="close_pop"><img @click="showpop" src="../assets/img/关闭.png" alt="" ></div>
            <h1>标题</h1>
            <h2>内容</h2>
            <div class="full_info">
                <span>作者：writer</span>
                <span>点赞数：good</span>
            </div>
       </div>
    </div>
</template>

<script>
import headerView from '@/components/headerView'
import store from '@/store';
export default {
  name:"find",
  components: {'v-header':headerView},
  data(){
    return{
        ifshow:false,
        title:"",
        content:"",
        img:"",
        writer:"",
        good:"",
        data:[]
    }
  },
  created(){
    this.data=JSON.parse(localStorage.getItem("login"))
  },
  computed: {},
  methods:{
    showpop(){
        this.ifshow=!this.ifshow;
    }
  }
}
</script>

<style lang="scss" scoped>
.body{//1.设置背景色
    background: #f6f6f6;
}
.content{//2.父元素盒子
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .news_box{//3.左边新闻栏
    float: left;
    width: 700px;
        .news{//3.1新闻盒子
            width:600px;
            height: 100px;
            display: flex;
            border-bottom: 1px solid #dfdfdf;
            padding: 20px;
            a{
                display: flex;
            }
            .news_img{
                height: 100%;
                width: 165px;
            }
            .textbox{//3.1.1标题
                display: inline;
                
                .text{
                    margin-left: 20px; 
                    width: 414px; 
                    line-height: 30px;
                    display: -webkit-box;
                    overflow: hidden;//超出隐藏
                    -webkit-box-orient: vertical;//设置子元素排列方式
                    -webkit-line-clamp: 2;//显示行数
                }
                .editor{
                    padding: 20px 0 0 20px;
                    img{
                        vertical-align: middle;
                        padding-top: 1px;
                        padding-right: 3px;
                        height: 14px;
                    }
                    span{
                        vertical-align: middle;
                        padding-right: 20px;
                    }
                }
            }
            
        }
    }
    .recommend{//4.右边推荐栏
        width: 400px;
        float: left;
        margin-left: 50px;
        h2{
            text-align: center;
        }
        .ranking{//4.1排行榜
            li{
                margin: 10px 0 24px 10px;
                white-space: nowrap;//单行显示
                overflow: hidden;
                text-overflow: ellipsis;//超出文本以省略号显示
            }
            li:nth-child(1)::before{//排行榜数字
                display: inline-block;
                width: 20px;
                content: "1";
                color: orangered;
                font-weight: 700;
            }
            li:nth-child(2)::before{
                display: inline-block;
                width: 20px;
                content: "2";
                color: orange;
                font-weight: 700;
            }
            li:nth-child(3)::before{
                display: inline-block;
                width: 20px;
                content: "3";
                color: yellowgreen;
                font-weight: 700;
            }
            li:nth-child(4)::before{
                display: inline-block;
                width: 20px;
                content: "4";
                color: rgba(51,51,51,0.8);
                font-weight: 700;
            }
            li:nth-child(5)::before{
                display: inline-block;
                width: 20px;
                content: "5";
                color: rgba(51,51,51,0.7);
                font-weight: 700;
            }
            li:nth-child(6)::before{
                display: inline-block;
                width: 20px;
                content: "6";
                color: rgba(51,51,51,0.6);
                font-weight: 700;
            }
            li:nth-child(7)::before{
                display: inline-block;
                width: 20px;
                content: "7";
                color: rgba(51,51,51,0.5);
                font-weight: 700;
            }
            li:nth-child(8)::before{
                display: inline-block;
                width: 20px;
                content: "8";
                color: rgba(51,51,51,0.4);
                font-weight: 700;
            }
            li:nth-child(9)::before{
                display: inline-block;
                width: 20px;
                content: "9";
                color: rgba(51,51,51,0.3);
                font-weight: 700;
            }
            li:nth-child(10)::before{
                display: inline-block;
                width: 20px;
                content: "10";
                color: rgba(51,51,51,0.2);
                font-weight: 700;
            }
            li:hover{
                color: pink;
                cursor:pointer;
            }
            a{
                margin-left: 10px;
                font-size: 16px;
            }   
        }
    }
}
.pop_content{
    text-align: center;
    border:1px solid rgb(200,200,200);
    padding: 20px;
    position: fixed;
    width: 500px;
    height: 400px;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background: white;
    .close_pop{
        position: absolute;
        width: fit-content;
        height: 20px;
        left: 500px;
        img{
            margin-top: -8px;
            width: 30px;
            height: 30px;
        }
        img:hover{
            cursor: pointer;
        }
    }
    .full_info{
        justify-content: space-between;
        display: flex;
        position: fixed;
        width: 300px;
        bottom: 20px;
        padding-left: 100px;
    }
}
</style>