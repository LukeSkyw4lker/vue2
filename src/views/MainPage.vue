<template>
  <!-- 整体页面盒子-->
<div class="full_page">
  <div class="main_page">
    <!-- 头部盒子-->
    <v-header></v-header>
    <!-- 整体内容盒子 -->
    <div class="content">
      <div class="content_wrapper">
        <!-- 左侧信息盒子 -->
        <div class="content_info">
          <!-- 导航盒子 -->
          <div class="content_nav">
            <!-- 导航信息 -->
            <ul class="nav_info">
              <li><router-link to="/recommend">推荐</router-link></li>
              <li><router-link to="/myfriend">我的好友</router-link></li>
              <li><router-link to="/hot">热度</router-link></li>
              <li><router-link to="/videos">视频</router-link></li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
        <!-- 右侧信息盒子 -->
        <div class="extra_info">
             <!-- 查看历史发布信息 -->
             <div class="mine_ques">
              <span>我的问题</span>
              <div class="publish">
               <div class="publish_top">
                 <span>标题</span>
                 <span>日期</span>
               </div>
               <div class="publish_middle"><p>克宫发布视频，普京自「瓦格纳事件」结束以来首次发表公开讲话，称赞本国工业的稳定运营，释放了什么信号？</p></div>
               <div class="publish_bottom">
                 <span>解决？</span>
                 <span>点赞</span>
                 <span>评论</span>
                 <span>反馈？</span>
               </div>
               
              </div>
             </div>
             <!-- 推荐好友 -->
             <div class="reco_friend">
               <span>推荐好友</span>
               <div class="friend_box">
                 <div class="friend_message" v-for="item,index in friend">
                   <img :src="item.img" alt="">
                   <div class="friend_id">
                     <span>{{item.id}}</span>
                     <p>{{item.signature}}</p>
                   </div>
                   <div class="add_friend"> 
                     <button>添加好友</button>
                   </div>
                 </div>
               </div>
             </div>
        </div>
      </div>
    </div>
  </div>
</div>
  

</template>

<script>
import headerView from '@/components/headerView'
export default {
  name:"MainPage",
  components: {'v-header':headerView},
  props: {},
  data() {
    return {
      itemname:"LC系统",
      id:"风de",
      signature:"输入个性签名",
      title:"水管泄露",
      friend:[
        {
          img:require("../assets/img/QQ图片20230629170253.jpg"),
          id:"里斯本萨克",
          signature:"我就是我，不一样的烟火"
        },
        {
          img:require("../assets/img/QQ图片20230630092703.jpg"),
          id:"逆飞的雪",
          signature:"掌中舞罢箫声绝，三十六宫秋夜长"
        },
        {
          img:require("../assets/img/QQ图片20230630092719.jpg"),
          id:"鹣鲽",
          signature:"鸳鸯双宿亦双飞，愿做鹣鲽不羡仙"
        },
        {
          img:require("../assets/img/QQ图片20230630092729.jpg"),
          id:"比特的距离",
          signature:"凤兮凤兮归故乡，遨游四海求其凰"
        },
        {
          img:require("../assets/img/QQ图片20230630092801.jpg"),
          id:"震撼我~一整年",
          signature:"峨眉长蹙倾国色，赢得君王醉不归"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
 //整体布局
.w{
  width: auto;
  margin: 0 auto;
}
.full_page{
  width: 100vw;
  height: 100vh;
  .main_page{
    background: rgba(18,18,18,0.1);
  .content{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    .content_wrapper{
      display: flex;
      position: relative;
      .content_info{
        flex:3;
        font-size: 18px;
        border-right: 25px solid rgb(200, 200, 200,0.2);
        .content_nav{
          display:flex;
          border: 1px solid rgb(240, 242, 247);
          .nav_info{
            margin-left: 50px;
            height: 60px;
            display:flex;
            justify-content: space-between;
            width: 300px;
            cursor: pointer;
            li{
              line-height: 60px;
            }
          }
          .nav_info :hover{
            color: pink;
          }
          span{
            margin-left: 100px;
            cursor: pointer;
          }
        }
        .dynamic{
          border: 1px solid rgb(240, 242, 247);
          padding: 10px 20px;
          
        }
      }
      .extra_info{
        width: 450px;
        border: 1px solid rgb(240, 242, 247);
        span{
          font-weight: bold;
        }
        .mine_ques{
          margin: 20px 10px;

          .publish{
            padding: 15px 30px;
            margin: 10px 0 15px 0;
            border: 1px solid rgb(200,200,200,0.4);
            .publish_top{
              span:nth-child(2){
                margin-left: 150px;
              }
            }
            .publish_middle{
              margin: 10px 0;
              line-height: 30px;
              display: -webkit-box;
              overflow: hidden;//超出隐藏
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            }
            .publish_bottom{
              span:nth-child(2){
                margin-left: 150px;
              }
              span:nth-child(3){
                margin-left: 20px;
              }
              span:nth-child(4){
                margin-left: 20px;
              }
            }
            
          }
        }
        .reco_friend{
          margin: 20px 10px;
          border: 1px solid rgb(200, 200, 200,0.2);
          padding: 2px;
          .friend_box{
            padding: 15px 30px;
            //border: 1px solid;
            .friend_message:last-child{
              border-bottom: none;
            }
            .friend_message{
              display: flex;
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #d8e0f4;
              img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
              }
              .friend_id{
                
                width: 250px;
                margin-left: 10px;
                p{
                  margin-top: 5px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
              .add_friend{
                margin: auto 0;
                button{ 
                  width: 65px;
                  height: 25px;
                  background: #00aeec;
                  color: #fff;
                  border: none;
                  border-radius: 5px;
                }
                button:hover{
                  background:pink;
                  cursor: pointer;
                }
              }
            }
            
          }
        }
        }
      }
    }
  }
 
  
}


</style>