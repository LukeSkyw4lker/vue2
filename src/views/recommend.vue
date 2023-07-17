<template>
  <div>
    <div class="content">
      <ul>
        <li class="content_item" v-for="(item, index) in List" :key="index">
          <div class="content_wrapper_active" :class="item.flag?'content_wrapper_active':'content_wrapper'">
            <!-- 标题 -->
            <div class="title">
              {{ item.title }}
            </div>
            <!-- 中间内容 -->
            <div class="info_wrapper">
              <div class="info">
                <div class="info_text">
                  {{ item.info }}
                </div>
                <button class="readmore_button" :class="item.flag?'readmore_button_active':''" @click="readMore(index)">
                    <span v-if="!item.flag">阅读全文</span>
                    <span v-else>收起</span>
                </button>
              </div>
            </div>
            <!-- 下方按钮 -->
            <div class="info_button">
              <!-- 左边两个按钮 -->
              <div class="info_button_left">
                <!-- <div @click="change1()" class="button_zt" :class="flag1==0 && index==item.id?'button_zt':'button_zt_active'"> -->
                <div
                  @click="change_zt(index)"
                  class="button_zt"
                  :class="item.checked ? 'button_zt_active' : ''"
                >
                  <span class="zt">
                    <img
                      v-if="!item.checked"
                      src="../assets/img/上三角.png"
                      alt=""
                    />
                    <img v-else src="../assets/img/上三角白.png" alt="" />
                    <span v-if="!item.checked" class="zt_button">赞同</span>
                    <span v-else class="zt_button">已赞同</span>
                    <span class="num">{{ item.clickNum }}</span>
                  </span>
                </div>
                <div
                  @click="change_fd(index)"
                  class="button_fd"
                  :class="item.checked1? 'button_fd_active' : ''"
                >
                  <img
                    v-if="!item.checked1"
                    src="../assets/img/下三角.png"
                    alt=""
                  />
                  <img v-else src="../assets/img/下三角白.png" alt="" />
                </div>
              </div>
              <div @click="change(index)" class="button_pl">
                <img src="../assets/img/评论.png" alt="" />
                <button v-if="!item.flag1">{{List[index].ratings.length}}条评论</button>
                <button v-else>收起评论</button>
              </div>
              <div @click="change_fx(index)" class="button_fx">
                <img src="../assets/img/分享.png" alt="" />
                <button v-if="!item.checked4">分享</button>
                <button v-else>取消分享</button>
              </div>
              <div @click="change_sc(index)" class="button_sc">
                <img src="../assets/img/收藏.png" alt="" />
                <button v-if="!item.checked3">收藏</button>
                <button v-else>取消收藏</button>
              </div>
              <div @click="change_like(index)" class="button_xh">
                <img src="../assets/img/喜欢.png" alt="" />
                <button v-if="!item.checked2">喜欢</button>
                <button v-else>取消喜欢</button>
              </div>
              <div class="button_">
                <button>...</button>
              </div>
            </div>
          </div>
          <div class="rating_wrapper">
            <div class="rating_content">
              <!-- v-if="item.flag1" -->
              <div v-if="item.flag1" class="rating">
                <div class="top">
                  <div class="top_wrapper">
                    <img src="../assets/img/头像.png" alt="">
                    <div class="input1">
                      <div class="input_text1">
                        <span>
                          <el-input class="borderNone" v-model="List[index].text1" autosize type="textarea" placeholder="评论千万条，友善第一条" clearable>
                          </el-input>
                        </span>
                      </div>
                      <div class="input_button">
                        <div class="button_fb">
                          <button @click="addRating(index)">发布</button>
                        </div>
                      </div>
                    </div>             
                  </div>         
                </div>
                <div class="rating_text">
                  <div class="rating_text_title">
                    <div class="title_rating">
                      {{List[index].ratings.length}}条评论
                    </div>
                  </div>
                  <div class="rating_text_content">
                    <div class="rating_item">
                      <div v-for="item1,index1 in List[index].ratings" class="item_content">
                        <div class="content_left">
                          <img :src="item1.avatar" alt="">
                        </div>
                        <div class="content_right">
                          <div class="name">
                            <span>{{ item1.username }}</span>
                          </div>
                          <div class="right_text">
                            {{ item1.text }}
                          </div>
                          <div class="right_foot">
                            <div class="foot_left">
                              <div>
                                <span>{{ List[index].ratings[index1].rateTime }}</span>
                                <span>ip属地{{ List[index].ratings[index1].ip }}</span>
                              </div>
                              
                            </div>
                            <div class="foot_right">
                              <button>
                                <img src="../assets/img/评论.png" alt="">
                                <span>回复</span>
                              </button>
                              <button @click="like(index,index1)">
                                <img v-if="!item1.flag" src="../assets/img/点赞.png" alt="">
                                <img v-else src="../assets/img/真点赞.png" alt="">
                                <span>{{ item1.score }}</span></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import elmdata from '@/assets/data.js'
export default {
  name: "recommend",
  data() {
    return {

      List:elmdata.data.List,

    };
  },
  created() {
            var List = elmdata.data.List;
            // console.log(List.length)
            // console.log(List.length);
            // console.log(goodList);
            for (let i = 0; i < List.length; i++) {
              var ratingsList = elmdata.data.List[i].ratings;
              // console.log(ratingsList.length);
                for(let j=0; j < ratingsList.length; j++){
                  
                  var time = ratingsList[j].rateTime;
                  time = new Date(time)
                  // console.log(time);
                  var year = time.getFullYear();
                  var mouth = time.getMonth() + 1;
                  var day = time.getDate();
                  var hours = time.getHours();
                  var minte = time.getMinutes();
                  var second = time.getSeconds();
                  // 月份，日期，时分秒 不足俩位数的情况 前面补上0
                  mouth = mouth.toString().padStart(2, 0)
                  day = day.toString().padStart(2, 0)
                  hours = hours.toString().padStart(2, 0)
                  minte = minte.toString().padStart(2, 0)
                  second = second.toString().padStart(2, 0)
                  var data =
                      year +
                      "-" +
                      mouth +
                      "-" +
                      day +
                      "   " +
                      hours +
                      ":" +
                      minte +
                      ":" +
                      second;
                  // console.log(this.ratingsList[i].rateType);
                  // 时间为正常格式
                  ratingsList[j].rateTime = data;
                  // console.log(ratingsList[j]);
                  
                }
              //var ratingsList = List.ratings;
                // console.log(ratingsList[i]);
                // 将评论时间修改
                
                // }
              }
  },
  methods: {
    //加入数组
    ratingNr(num){
        var List = elmdata.data.List;
        for (let i = 0; i < List.length; i++) {
          if(num){
            var ratingsList = elmdata.data.List[i].ratings;
          }else{
            var ratingsList = num;
          }
          for(let j=0; j < ratingsList.length; j++){
            var time = ratingsList[j].rateTime;
                time = new Date(time)
                // console.log(time);
                var year = time.getFullYear();
                var mouth = time.getMonth() + 1;
                var day = time.getDate();
                var hours = time.getHours();
                var minte = time.getMinutes();
                var second = time.getSeconds();
                // 月份，日期，时分秒 不足俩位数的情况 前面补上0
                mouth = mouth.toString().padStart(2, 0)
                day = day.toString().padStart(2, 0)
                hours = hours.toString().padStart(2, 0)
                minte = minte.toString().padStart(2, 0)
                second = second.toString().padStart(2, 0)
                var data =
                    year +
                    "-" +
                    mouth +
                    "-" +
                    day +
                    "   " +
                    hours +
                    ":" +
                    minte +
                    ":" +
                    second;
                // console.log(this.ratingsList[i].rateType);
                // 时间为正常格式
                ratingsList[j].rateTime = data;
          }
          elmdata.data.List[i].ratings=ratingsList;

        }
              
    },
    //增加评论
    addRating(index){
                //var rateType = this.rateType1-0;
                //var score = this.score1-0;
                //var deliveryTime = this.deliveryTime1-0;
                //var recommend = this.recommend1;
                var time = new Date();
                var obj = {
                    "username": "jack",
                    "rateTime": time,
                    //"deliveryTime": deliveryTime,
                    "score": 0,
                    //"rateType": rateType,
                    "ip":"未知",
                    "text": elmdata.data.List[index].text1,
                    "avatar": "https://lzszm.oss-cn-beijing.aliyuncs.com/count/image/01.jpg",
                    //"recommend": recommend

                }
                elmdata.data.List[index].ratings.unshift(obj);
                this.ratingNr(elmdata.data.List[index].ratings);              
    },



    //评论下拉款
    change(index) {
      this.List[index].flag1 = !this.List[index].flag1;
    },
    // 阅读更多
    readMore(index) {
      this.List[index].flag = !this.List[index].flag;
    },
    // 赞同按钮点击改变
    change_zt(index) {
        //checked初始值为false
        // 点击后将checked的值取反使效果显示
        this.List[index].checked = !this.List[index].checked;
        // 点击后checked值为ture,将clickNum的值加一否则减一
        if (this.List[index].checked) {
          this.List[index].clickNum = this.List[index].clickNum + 1;
        } else {
            this.List[index].clickNum = this.List[index].clickNum - 1;
        }
        // 当反对按钮不被点击时(不被点击时checked1为false),此循环不执行，当反对按钮被点击后(被点击后checked1为true)，此循环执行，checked1取反使效果隐藏
        if (this.List[index].checked1) {
          this.List[index].checked1 = !this.List[index].checked1;
        }
    },
    // 反对按钮点击改变
    change_fd(index) {
        //checked1初始值为false
        // 点击后将checked1的值取反使效果显示
        this.List[index].checked1 = !this.List[index].checked1;
        if (this.List[index].checked) {
        //若赞同按钮被点击(被点击时checked为true)，此循环执行，checked取反使赞同按钮效果隐藏，并将其减一
          this.List[index].clickNum = this.List[index].clickNum - 1;
          this.List[index].checked = !this.List[index].checked;
        }
    },
    // 分享按钮点击改变
    change_fx(index) {
        //checked4初始值为false
        // 点击后将checked4的值取反使效果显示
        this.List[index].checked4 = !this.List[index].checked4;
    },
    // 收藏按钮点击改变
    change_sc(index) {
        //checked3初始值为false
        // 点击后将checked3的值取反使效果显示
        this.List[index].checked3 = !this.List[index].checked3;
    },
    // 喜欢按钮点击改变
    change_like(index) {
        //checked2初始值为false
        // 点击后将checked2的值取反使效果显示
        this.List[index].checked2 = !this.List[index].checked2;
    },
    //评论点赞
    like(index,index1){
      this.List[index].ratings[index1].flag = !this.List[index].ratings[index1].flag;
      if(this.List[index].ratings[index1].flag){
        this.List[index].ratings[index1].score = this.List[index].ratings[index1].score + 1;
      }else{
        this.List[index].ratings[index1].score = this.List[index].ratings[index1].score - 1;
      }
    },
    
  },
  comments() {},
};
</script>

<style lang="scss" scoped>
//样式穿透，去除el-input自带的边框及修改其他属性
::v-deep .el-textarea__inner {
  border: 0;
  resize: none;/* 这个是去掉 textarea 下面拉伸的那个标志，如下图 */
  font-family:'Microsoft YaHei';
  font-size:16px;

} 

.content {
  padding: 0px 20px;
  .content_item {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    .content_wrapper {
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .info_wrapper {
        .info {
          display: flex;
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.5;
          .info_text {
            //height: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /*第几行隐藏*/
            -webkit-box-orient: vertical;
          }
          .readmore_button {
            //position: relative;
            background-color: white;
            width: 100%;
            border: none;
            font-size: 16px;
            color: #175199;
            left: 0;
            padding-right: 10px;
            cursor: pointer;
          }
          button:hover {
            color: #76839b;
          }
        }
      }
      .info_button {
        padding-top: 10px;
        display: flex;
        justify-content: start;
        //align-items: center;

        //赞同和反对按钮
        .info_button_left {
          height: 40px;
          display: flex;
          //justify-content: space-between;
          //align-items: center;
          //padding-right: 100px;
          //width: 50%;
          .button_zt {
            //display: flex;
            align-items: center;
            background: rgba(5, 109, 232, 0.1);
            width: 100%;
            border-radius: 3px;
            cursor: pointer;
            .zt {
              margin-top: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #175199;
              padding: -1 12px;
              img {
                width: 18px;
                height: 18px;
                margin-right: 5px;
              }
              .zt_button {
                width: 40px;
                background-color: transparent;
                border: none;
                font-size: 16px;
                color: #056de8;
              }
              .num {
                align-items: center;
                font-size: 14px;
              }
            }
          }
          .button_zt_active {
            //display: flex;
            align-items: center;
            background: #056de8;
            width: 100%;
            border-radius: 3px;
            cursor: pointer;
            .zt {
              margin-top: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #175199;
              padding: -1 12px;
              img {
                width: 18px;
                height: 18px;
                margin-right: 5px;
              }
              .zt_button {
                width: 50px;
                background-color: transparent;
                border: none;
                font-size: 16px;
                color: white;
              }
              .num {
                color: white;
                align-items: center;
                font-size: 14px;
              }
            }
          }
          .button_fd {
            margin-left: 10px;
            display: flex;
            align-items: center;
            background: rgba(5, 109, 232, 0.1);
            width: 65px;
            height: 40px;
            border-radius: 3px;
            cursor: pointer;
            img {
              margin-left: 12px;
              width: 18px;
              height: 18px;
            }
          }
          .button_fd_active {
            margin-left: 10px;
            display: flex;
            align-items: center;
            background: #056de8;
            width: 65px;
            height: 40px;
            border-radius: 3px;
            cursor: pointer;
            img {
              margin-left: 12px;
              width: 18px;
              height: 18px;
            }
          }
        }
        //收藏和分享等五个按钮
        .button_pl {
          margin-left: 20px;
          display: flex;
          align-items: center;
          //padding-left: 20px;
          padding-right: 20px;
          img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
            cursor: pointer;
          }
          button {
            font-size: 14px;
            border: none;
            background-color: transparent;
            color: #8590a6;
            cursor: pointer;
          }
          button:hover {
            color: #5b7094;
          }
        }
        .button_fx {
          display: flex;
          align-items: center;
          padding-right: 20px;
          img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
            cursor: pointer;
          }
          button {
            font-size: 14px;
            border: none;
            background-color: transparent;
            color: #8590a6;
            cursor: pointer;
          }
          button:hover {
            color: #5b7094;
          }
        }
        .button_sc {
          padding-right: 20px;
          display: flex;
          align-items: center;
          img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
            cursor: pointer;
          }
          button {
            font-size: 14px;
            border: none;
            background-color: transparent;
            color: #8590a6;
            cursor: pointer;
          }
          button:hover {
            color: #5b7094;
          }
        }
        .button_xh {
          padding-right: 20px;
          display: flex;
          align-items: center;
          img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
            cursor: pointer;
          }
          button {
            font-size: 14px;
            border: none;
            background-color: transparent;
            color: #8590a6;
            cursor: pointer;
          }
          button:hover {
            color: #5b7094;
          }
        }
        .button_ {
          padding-right: 20px;
          display: flex;
          padding-right: 20px;

          button {
            font-size: 14px;
            border: none;
            background-color: transparent;
            color: #8590a6;
            cursor: pointer;
          }
          button:hover {
            color: #5b7094;
          }
        }
      }
    }
    .content_wrapper_active {
        position: relative;
        .title {
          font-size: 20px;
          font-weight: bold;
        }
        .info_wrapper {

          .info {
            display: flex;
            margin-top: 10px;
            font-size: 16px;
            line-height: 1.5;
            //.info_text {

                //width: 100%;
              //overflow: hidden;
              //text-overflow: ellipsis;
              //display: -webkit-box;
              //-webkit-line-clamp: 2; /*第几行隐藏*/
              //-webkit-box-orient: vertical;
            //}
            .readmore_button_active {
              position: absolute;
              background-color: white;
              //width: 100%;
              border: none;
              font-size: 16px;
              color: #175199;
              padding-right: 10px;
              cursor: pointer;
              bottom: 10px;
              right: 20px;
            }
            button:hover {
              color: #76839b;
            }
          }
        }
        .info_button {
          //padding: 10px;
          padding-top: 10px;
          display: flex;
          justify-content: start;
          //align-items: center;
  
          //赞同和反对按钮
          .info_button_left {
            height: 40px;
            display: flex;
            //justify-content: space-between;
            //align-items: center;
            //padding-right: 100px;
            //width: 50%;
            .button_zt {
              //display: flex;
              align-items: center;
              background: rgba(5, 109, 232, 0.1);
              width: 100%;
              border-radius: 3px;
              cursor: pointer;
              .zt {
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #175199;
                padding: -1 12px;
                img {
                  width: 18px;
                  height: 18px;
                  margin-right: 5px;
                }
                .zt_button {
                  width: 40px;
                  background-color: transparent;
                  border: none;
                  font-size: 16px;
                  color: #056de8;
                }
                .num {
                  align-items: center;
                  font-size: 14px;
                }
              }
            }
            .button_zt_active {
              //display: flex;
              align-items: center;
              background: #056de8;
              width: 100%;
              border-radius: 3px;
              cursor: pointer;
              .zt {
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #175199;
                padding: -1 12px;
                img {
                  width: 18px;
                  height: 18px;
                  margin-right: 5px;
                }
                .zt_button {
                  width: 50px;
                  background-color: transparent;
                  border: none;
                  font-size: 16px;
                  color: white;
                }
                .num {
                  color: white;
                  align-items: center;
                  font-size: 14px;
                }
              }
            }
            .button_fd {
              margin-left: 10px;
              display: flex;
              align-items: center;
              background: rgba(5, 109, 232, 0.1);
              width: 65px;
              height: 40px;
              border-radius: 3px;
              cursor: pointer;
              img {
                margin-left: 12px;
                width: 18px;
                height: 18px;
              }
            }
            .button_fd_active {
              margin-left: 10px;
              display: flex;
              align-items: center;
              background: #056de8;
              width: 65px;
              height: 40px;
              border-radius: 3px;
              cursor: pointer;
              img {
                margin-left: 12px;
                width: 18px;
                height: 18px;
              }
            }
          }
          //收藏和分享等五个按钮
          .button_pl {
            margin-left: 20px;
            display: flex;
            align-items: center;
            //padding-left: 20px;
            padding-right: 20px;
            img {
              width: 18px;
              height: 18px;
              margin-right: 5px;
              cursor: pointer;
            }
            button {
              font-size: 14px;
              border: none;
              background-color: transparent;
              color: #8590a6;
              cursor: pointer;
            }
            button:hover {
              color: #5b7094;
            }
          }
          .button_fx {
            display: flex;
            align-items: center;
            padding-right: 20px;
            img {
              width: 18px;
              height: 18px;
              margin-right: 5px;
              cursor: pointer;
            }
            button {
              font-size: 14px;
              border: none;
              background-color: transparent;
              color: #8590a6;
              cursor: pointer;
            }
            button:hover {
              color: #5b7094;
            }
          }
          .button_sc {
            padding-right: 20px;
            display: flex;
            align-items: center;
            img {
              width: 18px;
              height: 18px;
              margin-right: 5px;
              cursor: pointer;
            }
            button {
              font-size: 14px;
              border: none;
              background-color: transparent;
              color: #8590a6;
              cursor: pointer;
            }
            button:hover {
              color: #5b7094;
            }
          }
          .button_xh {
            padding-right: 20px;
            display: flex;
            align-items: center;
            img {
              width: 16px;
              height: 16px;
              margin-right: 5px;
              cursor: pointer;
            }
            button {
              font-size: 14px;
              border: none;
              background-color: transparent;
              color: #8590a6;
              cursor: pointer;
            }
            button:hover {
              color: #5b7094;
            }
          }
          .button_ {
            padding-right: 20px;
            display: flex;
            padding-right: 20px;
  
            button {
              font-size: 14px;
              border: none;
              background-color: transparent;
              color: #8590a6;
              cursor: pointer;
            }
            button:hover {
              color: #5b7094;
            }
          }

        }
    }
    .rating_wrapper{
      .rating_content{
        margin-top: 10px;
        .rating{
          .top{
            .top_wrapper{
              margin-bottom: 10px;
              display: flex;
              //align-items: center;
              img{
                width: 40px;
                height: 40px;
                margin-right: 10px;
                margin-top: 0px;
              }
              .input1{
                padding: 8px 12px;
                width: 100%;
                height: 100%;
                border: 1px solid #ebebeb;
                
                
                .input_button{
                  //display: none;
                  margin-top: 8px;
                  padding-top: 10px;
                  border-top: 0.1px solid #ebebeb;
                  display: flex;
                  flex-direction: row-reverse;
                  .button_fb{
                    width: 60px;
                    button{
                      background-color: #056de8;
                      border-radius: 4px;
                      color: white;
                      width: 100%;
                      height: 100%;
                      border: none;
                      cursor: pointer;
                    }
                  }

                }
                /* :focus 获得光标焦点时使用的颜色 */
                .input_text1 el-input:focus~.input_button{
                  display: block;
                  }

              }
              
            }

          }
          .rating_text{
            border: 1px solid #ebebeb;
            .rating_text_title{
              padding: 0px 20px;
              display: flex;
              border-bottom: 1px solid #ebebeb;
              //align-items: center;
              .title_rating{
                height: 50px;
                line-height: 54px;
                //display: flex;
                //align-items: center;
              }
            }
            .rating_text_content{
              padding: 10px 0px;
              .rating_item{
                width: 100%;
                .item_content{
                  display: flex;
                  padding: 10px 20px 14px;
                  border-bottom: 0.1px solid #ebebeb;
                  .content_left{
                    //display: flex;
                    img{
                      width: 24px;
                      height: 24px;

                    }
                  }
                  .content_right{
                    width: 100%;
                    margin-left: 10px;
                    .name{
                      display: flex;
                      width: 100%;
                      font-size: 15px;
                      font-weight: bold;
                    }
                    .right_text{
                      margin-top: 4px;
                      font-size: 15px;
                    }
                    .right_foot{
                      width: 100%;
                      display: flex;
                      align-items: center;
                      -webkit-box-align: center;
                      margin-top: 4px;
                      .foot_left{
                        display: flex;
                        width: 100%;
                        height: 100%;
                        span{
                          margin-right: 10px;
                          font-size: 14px;
                          color: #8590a6;
                        }
                        
                      }
                      .foot_right{
                        display: flex;
                        width: 100%;
                        //height: 100%;
                        justify-content: flex-end;
                        align-items: center;
 
                        button{
                          display: flex;
                          align-items: center;
                          border: none;
                          margin-left: 16px;
                          font-size: 14px;
                          line-height: 0px;
                          background-color: transparent;
                          //align-items: center;
                          img{
                            width: 16px;
                            height: 16px;
                            margin-right: 5px;
                            //line-height: 0px;
                          }
                          span{
                            width: 100%;
                            color: #8590a6;
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

      }
    }
  }
}
</style>


