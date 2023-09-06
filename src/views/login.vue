<template>
  <div class="login_page">
    <div class="login_title">
      <div class="logo"><img src="../assets/img/logo.png" alt="logo" /></div>
      <h1>欢迎登录LC系统平台</h1>
    </div>
    <!-- 账号密码登录 -->
    <div v-if="!loginFlag" class="login_content">
      <div class="input_act">
        <img class="input_img" src="../assets/img/用户-实色.png" alt="" />
        <input
          v-model="account"
          type="text"
          class="account"
          placeholder="请输入用户名"
        />
      </div>
      <div class="input_ps">
        <img class="input_img" src="../assets/img/锁定-实色.png" alt="" />
        <input
          v-model="password"
          :type="text1"
          class="password"
          placeholder="请输入密码"
        />
        <i @click="changeEasy">
          <img v-if="easy" src="../assets/img/眼睛.png" alt="" />
          <img v-else src="../assets/img/闭眼睛.png" alt="" />
        </i>
      </div>
      <button class="bt_login">
        <button @click="login" class="login_last">登录</button>
      </button>
      <ul class="extra">
        <li>
          <button @click="changeLogin">
            {{ loginFlag ? "账号密码登录" : "手机短信登录" }}
          </button>
        </li>
        <li><router-link to="/regist">去注册</router-link></li>
      </ul>
      <li>
        登录即同意相关协议--<router-link to="/agreement"
          >《登录协议》</router-link
        >
      </li>
    </div>
    <!-- 手机号验证码登录 -->
    <div v-else class="login_content1">
      <div class="input_act">
        <img class="input_img" src="../assets/img/手机号.png" alt="" />
        <input
          v-model="phone"
          type="text"
          class="account"
          placeholder="请输入手机号"
        />
        <button class="send_msg" @click="loginAuth">{{ auth }}</button>
      </div>
      <div class="input_ps">
        <img class="input_img" src="../assets/img/验证码.png" alt="" />
        <input
          v-model="authText"
          type="text"
          class="password"
          placeholder="请输入验证码"
        />
      </div>
      <button class="bt_login">
        <button @click="login" class="login_last">登录</button>
      </button>
      <ul class="extra">
        <li>
          <button @click="changeLogin">
            {{ loginFlag ? "账号密码登录" : "手机短信登录" }}
          </button>
        </li>
        <li><router-link to="/regist">去注册</router-link></li>
      </ul>
      <li>
        登录即同意相关协议--<router-link to="/agreement"
          >《登录协议》</router-link
        >
      </li>
    </div>
  </div>
</template>

<script>
import { get,post } from '@/utils/http';
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      easy: false,
      text1: "password",
      loginFlag: false,
      password: "",
      phone: "",
      auth: "验证码",
      authText: "",
      account: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    loginAuth() {
      if (this.phone) {
        // console.log();
        // 设置随机数 Math.random()
        // Math.floor设置向下取整
        var str = "";
        for (let i = 0; i < 4; i++) {
          var Ramdom = Math.floor(Math.random() * 10);
          str += Ramdom;
        }
        console.log(str);
        this.auth = str;
      } else {
        alert("请输入完整的电话号");
      }
    },
    changeLogin() {
      this.loginFlag = !this.loginFlag;
    },
    changeEasy() {
      this.easy = !this.easy;
      if (this.easy) {
        this.text1 = "text";
      } else {
        this.text1 = "password";
      }
    },
    login() {
      if (this.loginFlag) {
        let reg = /^1[3|5|7|8|9]\d{9}$/;
        // 验证码登录
        // 验证码登录
        if (this.auth == this.authText && reg.test(this.phone)) {
          post("user/login", {
            userPhone: this.phone,
          }).then((res) => {
            if (res.code == 200) {
              alert("登录成功");
              localStorage.setItem("login", JSON.stringify(res.data));
              this.$router.push({ path: "/MainPage" });
            } else {
              alert(res.msg);
            }
          });
        } else {
          alert("手机号或者验证码错误");
        }
      } else {
        if (this.account == "" || this.password == "") {
          alert("账号密码不能为空");
        } else {
          post("user/login", {
            userAccount: this.account,
            userPassword: this.password,
          }).then((res) => {
            if (res.code == 200) {
              alert("登录成功");
              //JSON.stringify():localstorage存对象时要先把json转换为json字符串
              localStorage.setItem("login", JSON.stringify(res.data));
              this.$router.push({ path: "/MainPage" });
            } else {
              alert(res.msg);
            }
          });
        }
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.login_page {
  background-image: url(../assets/img/阿尔卑斯山风景4k高清壁纸3840x2160_彼岸图网.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100wh;
  .login_title {
    display: flex;
    text-align: center;
    align-items: center;
    padding-left: 550px;
    padding-top: 100px;
    .logo {
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transform: scale(2);
      }
    }
    h1 {
      padding-left: 20px;
    }
  }
  .login_content {
    border: 1px solid rgb(200, 200, 200);
    width: fit-content;
    padding: 10px 60px;
    height: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .input_act {
      background: rgb(255, 255, 255);
      height: 40px;
      width: 300px;
      border: 1px solid rgb(200, 200, 200);
      /* text-align: center; */
      border-radius: 15px;
      margin: 60px 0px 0px 20px;
      img {
        width: 30px;
        margin: 0px 0 0 8px;
        vertical-align: middle;
      }
      input {
        padding: 5px 5px;
        width: 200px;
        height: 30px;
        border: none;
        outline: none;
      }
    }
    .input_ps {
      background: rgb(255, 255, 255);
      height: 40px;
      width: 300px;
      border: 1px solid rgb(200, 200, 200);
      /* text-align: center; */
      border-radius: 15px;
      margin: 20px 0px 0px 20px;
      position: relative;
      img {
        width: 30px;
        margin: 0px 0 0 8px;
        vertical-align: middle;
      }
      input {
        padding: 5px 5px;
        width: 240px;
        height: 30px;
        border: none;
        outline: none;
      }
      i {
        position: absolute;
        left: 83%;
        top: 6px;

        img {
          width: 27px;
        }
      }
    }
    .bt_login {
      text-align: center;
      margin-top: 20px;
      background-color: rgb(255, 255, 255, 0.8);
      width: 80px;
      height: 30px;
      font-size: 16px;
      border-radius: 6px;
      margin-left: 120px;
      button{
        border: none;
        background: none;
      }
    }
    .bt_login:hover {
      background-color: rgb(0, 255, 255, 0.4);
      cursor: pointer;
    }
    .extra {
      display: flex;
      padding: 10px 0px;
      justify-content: space-between;
      li {
        font-size: 2px;
        button {
          border: none;
          background: none;
        }
        button:hover {
          cursor: pointer;
        }
      }
    }
    li {
      font-size: 2px;
      text-align: center;
      padding-top: 10px;
    }
  }
  .login_content1 {
    border: 1px solid rgb(200, 200, 200);
    width: fit-content;
    padding: 10px 60px;
    height: 300px;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .input_act {
      background: rgb(255, 255, 255);
      height: 40px;
      width: 200px;
      border: 1px solid rgb(200, 200, 200);
      /* text-align: center; */
      border-radius: 15px;
      margin: 60px 0px 0px 20px;
      .send_msg {
        position: absolute;
        left: 300px;
        top: 75px;
        padding: 5px 10px;
        border-radius: 8px;
        background-color: aliceblue;
      }
      .send_msg:hover {
        background-color: white;
        cursor: pointer;
      }
      img {
        width: 30px;
        margin: 0px 0 0 8px;
        vertical-align: middle;
      }
      input {
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
      border: 1px solid rgb(200, 200, 200);
      /* text-align: center; */
      border-radius: 15px;
      margin: 20px 0px 0px 20px;
      img {
        width: 30px;
        margin: 0px 0 0 8px;
        vertical-align: middle;
      }
      input {
        padding: 5px 5px;
        width: 240px;
        height: 30px;
        border: none;
        outline: none;
      }
    }
    .bt_login {
      text-align: center;
      margin-top: 20px;
      background-color: rgb(255, 255, 255, 0.8);
      width: 80px;
      height: 30px;
      font-size: 16px;
      border-radius: 6px;
      margin-left: 120px;
      button{
        border: none;
        background: none;
      }
    }
    .bt_login:hover {
      background-color: rgb(0, 255, 255, 0.4);
      cursor: pointer;
    }
    .extra {
      display: flex;
      padding: 10px 0px;
      justify-content: space-between;
      li {
        font-size: 2px;
        button {
          border: none;
          background: none;
        }
        button:hover {
          cursor: pointer;
        }
      }
    }
    li {
      font-size: 2px;
      text-align: center;
      padding-top: 10px;
    }
  }
}
</style>
