<template>
  <div class="login_page">
    <div class="login_title">
      <div class="logo"><img src="../assets/img/logo.png" alt="logo"></div>
      <h1>手机号登录</h1>
    </div>
    <div class="login_content">
        <div class="input_act">
            <img class="input_img" src="../assets/img/手机号.png" alt="" />
            <input type="text" class="account" placeholder="请输入手机号">
            <button class="send_msg">发送验证码</button>
        </div>
        <div class="input_ps">
          <img class="input_img" src="../assets/img/验证码.png" alt="" />
          <input type="password" class="password" placeholder="请输入验证码">
        </div>
        <button class="bt_login"><router-link to="/MainPage">登录</router-link></button>
        <ul class="extra">
            <li><input type="checkbox"/><b>下次自动登录</b></li>
            <li><router-link to="/forget">登录失败？</router-link></li>
        </ul>
        <li>登录即同意相关协议--<router-link to="/agreement">《登录协议》</router-link></li>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
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
.login_page{
    background-image: url(../assets/img/OIP-C.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100wh;
    .login_title{
      display:flex;
      text-align: center;
      align-items: center;
      padding-left: 620px;
      padding-top: 100px;
      .logo{
        width:100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        img{
          object-fit: cover;
          width: 100%;
          height: 100%;
          transform: scale(2);
        }
      }
      h1{
        padding-left: 20px;
      }
    }
    .login_content{
        border: 1px solid rgb(200, 200, 200);
        width: fit-content;
        padding: 10px 60px;
        height: 300px;
        background-color: rgb(255, 255, 255,0.6);
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .input_act {
            background: rgb(255, 255, 255);
            height: 40px;
            width: 200px;
            border: 1px solid rgb(200,200,200);
            /* text-align: center; */
            border-radius: 15px;
            margin: 60px 0px 0px 20px;
            .send_msg{
              position: absolute;
              left: 300px;
              top: 75px;
              padding: 5px 10px;
              border-radius: 8px;
              background-color: aliceblue;
            }
            .send_msg:hover{
              background-color: white;
              cursor: pointer;
            }
            img {
                width: 30px;
                margin: 0px 0 0 8px;
                vertical-align: middle;
              }
            input{
                padding: 5px 5px;
                width: 100px;
                height: 30px;
                border: none;
                outline: none;
            }
          }
        .input_ps {
            background: rgb(255, 255, 255);
            height: 40px;
            width: 300px;
            border: 1px solid rgb(200,200,200);
            /* text-align: center; */
            border-radius: 15px;
            margin: 20px 0px 0px 20px;
            img {
                width: 30px;
                margin: 0px 0 0 8px;
                vertical-align: middle;
              }
            input{
                padding: 5px 5px;
                width: 240px;
                height: 30px;
                border: none;
                outline: none;
            }
        }
        .bt_login{
          text-align: center;
          margin-top: 20px;
          background-color: rgb(255, 255, 255,0.8);
          width: 80px;
          height: 30px;
          font-size: 16px;
          border-radius: 6px;
          margin-left: 120px;
        }
        .bt_login:hover{
          background-color: rgb(0,255,255,0.4);
          cursor: pointer;
        }
        .extra{
            display: flex;
            padding: 10px 0px;
            justify-content: space-between;
            li{
                font-size: 2px;
            }
        }
        li{
            font-size: 2px;
            text-align: center;
            padding-top: 10px;
        }
    }
}
</style>