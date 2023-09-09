<template>
    <div>
        <header class="header_wrapper w ">
            <!-- 头部内容 -->
            <div class="header_content">
              <!-- 项目名 -->
              <div class="item_logo"><img src="../assets/img/logo.png" alt=""></div>
              <!-- 导航栏 -->
              <ul class="header_nav">
                <li><router-link to="/MainPage">首页</router-link></li>
                <li><router-link to="/find">发现</router-link></li>
                <li><router-link to="/waitYou">等你来答</router-link></li>
                <li><router-link to="/myself">个人动态</router-link></li>
              </ul>
              <!-- 搜索盒子 -->
              <div class="header_search">
                <input class="search_sq" type="text" placeholder="输入搜索内容">
                <span>搜索</span>
              </div>
              <!-- 消息盒子 -->
              <ul class="header_msg">
                <div class="msg">
                  <img src="../assets/img/消息中心.png" alt="">
                  <li @click="showpop">消息</li>
                </div>
                <div class="msg">
                  <img src="../assets/img/消息.png" alt="">
                  <li @click="showpop1">私信</li>
                </div>
                <div class="msg">
                  <img src="../assets/img/常见问题／相关问题.png" alt="">
                  <li @click="showpop3">问题</li>
                </div>
              </ul>
              <!-- 消息弹窗盒子 -->
              <div class="pop_msg" v-if="ifshow">
                <!-- 导航 -->
                <div class="pop_nav">
                  <img src="../assets/img/导航栏_模式01.png" alt="">
                  <img src="../assets/img/3.1 好友.png" alt="">
                  <img src="../assets/img/喜爱.png" alt="">
                </div>
                <!-- 内容 -->
                <div class="pop_content">
                </div>
              </div>
              <!-- 私信弹窗盒子 -->
              <div class="pop_msg1" v-if="ifshow1">
                <!-- 导航 -->
                <div class="pop_title">
                  <li>我的私信</li>
                </div>
                <!-- 内容 -->
                <div class="pop_content1">
                  
                </div>
              </div>
              <!-- 头像盒子 -->
              <div class="header_img" @click="showpop2">
                <!-- <img src="" alt="头像"> -->
                <div class="head_img"><img src="../assets/img/用户-实色.png" alt="头像"></div>
                <span class="user_info">
                  <li>{{nickname}}</li>
                  <li>我的签名</li>
                </span>
              </div>
            </div>
            <!-- 弹窗 -->
            <div class="pop_info" v-if="ifshow2">
              <span class="dynamic"><router-link to="/myself">个人动态</router-link></span>
              <span class="return_log"><router-link to="/login">注销</router-link></span>
            </div>
            <!-- 问题弹窗 -->
            <div class="pop_que" v-if="ifshow3">
              <h3>标题</h3><input type="text">
              <textarea rows="4" cols="50" class="ans_content"></textarea>
              <button @click="showpop3">取消</button>
              <button>提交</button>
            </div>
          </header>
    </div>
</template>

<script>
import { parse } from 'qs';
import store from '@/store';
import { get } from '@/utils/http';

    export default {
      //props接收：1、props:['',] 2、props:{name:{type:String},}
      props:['nickname'],
      data(){
        return{
          ifshow:false,
          ifshow1:false,
          ifshow2:false,
          ifshow3:false,
          name:'',
          // list:''
          // nickname:JSON.parse(localStorage.getItem("login")).userNickname
        };
      },
      computed:{
      },
      mounted(){ 
        
      },
      created(){
        this.name=JSON.parse(localStorage.getItem("login")).userNickname
        // this.$nextTick(()=>{
        //   this.name=JSON.parse(localStorage.getItem("login")).userNickname
        // })
        
      },
      methods:{
        get(){
          
        },
        showpop(){
          this.ifshow=!this.ifshow;
          setTimeout(()=>{
            this.ifshow=false;
          },2000);
        },
        showpop1(){
          this.ifshow1=!this.ifshow1;
          setTimeout(()=>{
            this.ifshow1=false;
          },2000);
        },
        showpop2(){
          this.ifshow2=!this.ifshow2;
          setTimeout(()=>{
            this.ifshow2=false;
          },4000);
        },
        showpop3(){
          this.ifshow3=!this.ifshow3;
        }
      }
        
    }
</script>

<style lang="scss" scoped>
.w{
    width: auto;
    margin: 0 auto;
  }
.header_wrapper{
    margin-top: 10px;
    position: relative;
    margin-bottom: 10px;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: center; /* 水平居中 */
    .header_content{
      width: 90%;
      display: flex;
      .item_logo{
        width:60px;
        height:60px;
        overflow: hidden;
        img{
          width: 60px;
          height: 60px;
          transform: scale(2.6);
        }
      }
      .header_nav{
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 600;
        width: 400px;
        padding-right: 50px;
        margin-left: 20px;
        /*变小手*/
         cursor: pointer;
         li{
          width: 80px;
          text-align: center;
          line-height: 60px;
          img{
            width: 40px;
            
          }
         }
      }
      /*点击变颜色*/
      .header_nav :hover{
        background-color: pink;
      }

      .header_search{
        margin: 0 10px;
        padding: 0 4px ;
        line-height: 60px;
        cursor: pointer;
        .search_sq{
            width: 210px;
            height: 28px;
            border-radius: 999px;
            padding: 4px 16px;
            border: 1px solid rgb(240, 242, 247);
            background:  rgb(240, 242, 247);
        }
        span{
          border: 1px solid rgb(171, 192, 246);
          padding: 5px 20px;
          border-radius: 10px;
          font-size: 10px;
          margin-left: 10px;
          background-color: rgb(0,255,255,0.4);
        }
        span:hover{
          background-color: pink;
        }
      }
      /*点击变颜色*/
      .header_search span:hover{
        background-color: pink;
      }
      .header_msg{
        display: flex;
        padding: 0 40px;
        line-height: 60px;
        width: 140px;
        justify-content: space-around;
        cursor: pointer;
        img{
          width: 18px;
          height: 18px;
        }
        li{
          font-size: 10px;
          margin-top: -45px;
          margin-left: -2px;
        }
        .msg{
          padding: 0px 10px;
          overflow: hidden;
        }
        .msg:hover{
          background-color: pink;
        }
      }
      
      .pop_msg{
        z-index: 99;
        position: absolute;
        left: 900px;
        top: 60px;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 2%;
        background-color: white;
        width: 240px;
        padding: 5px 10px;
        height: 240px;
        .pop_nav{
          display: flex;
          border-bottom: 1px solid rgb(200, 200, 200);
          justify-content: space-between;
          padding: 0px 10px;
          img{
            width: 30px;
          }
        }
        //.pop_content{

        //}
      }
      .pop_msg1{
        z-index: 99;
        position: absolute;
        left: 970px;
        top: 60px;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 2%;
        background-color: white;
        width: 240px;
        padding: 10px;
        height: 240px;
        li{
          text-align: center;
          border-bottom: 1px solid rgb(200, 200, 200);
          padding: 5px 0px ;
        }
      }
      .header_msg :hover{
        background-color: pink;
      }
      .header_img{
        display: flex;
        position:absolute;
        left: 1200px;
        .head_img{
          width: 56px;
          height: 56px;
          border: 1px solid rgb(200, 200, 200);
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 56px;
            height: 56px;
          }
        }
        .user_info{
          padding: 8px;
          li{
            overflow: hidden;             
            text-overflow: ellipsis;      
            white-space: nowrap; 
            width: 200px;
          }
        }
      }
      .header_img:hover{
        color: rgb(200, 200, 200,0.6);
        cursor: pointer;
      }
    }
    .pop_info{
      z-index: 999;
      position: absolute;
      right: 190px;
      top: 60px;
      width: 110px;
      display: flex;
      border-radius: 6px;
      flex-direction: column;
      text-align: center;
      border: 1px solid rgb(200, 200, 200);
      background-color: rgb(255, 255, 255);
      height: 80px;
      .dynamic{
        padding: 10px 0px;
        border-bottom: 1px solid rgb(200, 200, 200);
      }
      .dynamic :hover{
        color:pink;
      }
      .return_log{
        padding-top: 10px;
      }
      .return_log :hover{
        color: pink;
      }
    }
    .pop_que{
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
      input{
        border: none;
        outline: none;
        height: 20px;
        font-size: 18px;
        border-bottom: 1px solid rgb(200, 200, 200);
      }
      .ans_content{
        margin-top: 10px;
        width: 100%;
        height: 200px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
        background-color: rgb(255,255,255,0.6);
        border: 1px solid #ccc;
        padding: 5px;
      }
      button{
        background-color: wheat;
        padding: 0px 20px;
        font-size: 18px;
        margin:10px 24px;
        border-radius: 8px;
      }
      
    }
}
</style>