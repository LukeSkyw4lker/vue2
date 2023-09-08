<template>
  <div class="big-page">
    <div>
      <v-header></v-header>
    </div>
    <div class="wait_t">
      <ul class="nav_info">
        <li>为你推荐</li>
        <li>邀请回答</li>
        <li>最新问题</li>
        <li>人气问题</li>
      </ul>
    </div>
    <div class="que_content">
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十二人关注</li>
          <li class="xia2">社区平台是否有福利?</li>
          <li class="xia3">14,975 浏览 · 401 回答 · 439 关注 · 1 天前的提问</li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">你可能感兴趣</li>
          <li class="xia2">社区服务是否到位?</li>
          <li class="xia3">
            49,875 浏览 · 5,614 回答 · 30,738 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十八人关注</li>
          <li class="xia2">社区平台是否有福利?</li>
          <li class="xia3">4,975 浏览 · 40 回答 · 49 关注 · 1 个月前的提问</li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">你可能感兴趣</li>
          <li class="xia2">如何建立一个有凝聚力和互助精神的社区？</li>
          <li class="xia3">149 浏览 · 41 回答 · 39 关注 · 1 个月前的提问</li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">你可能感兴趣</li>
          <li class="xia2">
            为什么积极参与社区活动对个人和社区发展都是有益的？
          </li>
          <li class="xia3">
            14,905 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十三人关注</li>
          <li class="xia2">如何提高社区的安全和居民的幸福感？</li>
          <li class="xia3">
            14,995 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十四人关注</li>
          <li class="xia2">如何鼓励社区成员参与环保和可持续发展的倡议？</li>
          <li class="xia3">
            4,975 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十二人关注</li>
          <li class="xia2">社区之间如何建立联系和合作？</li>
          <li class="xia3">
            4,995 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十一人关注</li>
          <li class="xia2">为什么跨社区的合作对解决共同问题很重要？</li>
          <li class="xia3">
            6,955 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近十九人关注</li>
          <li class="xia2">
            面对日益复杂和多元化的挑战，社区如何适应变化并保持可持续发展？
          </li>
          <li class="xia3">
            3,970 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近二十人关注</li>
          <li class="xia2">社区创新对社会和经济发展有何影响？</li>
          <li class="xia3">
            9,955 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
      <div class="wait_x">
        <ul class="xiaxia">
          <li class="xia1">最近二十一人关注</li>
          <li class="xia2">社区发展的未来趋势是什么？</li>
          <li class="xia3">
            7,955 浏览 · 401 回答 · 439 关注 · 1 个月前的提问
          </li>
          <div class="button1">
            <button class="waitbutton" @click="showpop">写回答</button>
          </div>
        </ul>
      </div>
    </div>
    <!-- 回答问题弹窗 -->
    <div class="pop_answer" v-if="ifshow">
      <h2>请书写您的回答内容</h2>
      <textarea rows="4" cols="50" class="ans_content"></textarea>
      <button @click="showpop">取消</button>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import headerView from "@/components/headerView";
import store from '@/store';
export default {
  name: "waitYou",
  components: { "v-header": headerView },
  data() {
    return {
      ifshow: false,
    };
  },
  computed: {},
  methods: {
    showpop() {
      this.ifshow = !this.ifshow;
    },
  },
};
</script>

<style lang="scss" scoped>
.big-page {
  .wait_t {
    border: 1px solid rgb(240, 242, 247);
    border-radius: 2px 2px 0 0;
    display: flex;
    height: 68px;
    padding: 0 10px;
    justify-content: center;
    .nav_info {
      height: 60px;
      display: flex;
      justify-content: space-between;
      width: 600px;
      cursor: pointer;
      li {
        line-height: 60px;
      }
    }
    .nav_info :hover {
      color: pink;
    }
  }
  .wait_x {
    padding: 24px 0px;
    border-bottom: 1px solid rgb(235, 235, 235);
    margin-left: 220px;
    .xia1 {
      box-sizing: border-box;
      margin: 0px 0px 8px;
      min-width: 0px;
      color: rgb(133, 144, 166);
      font-size: 14px;
      line-height: 15px;
    }
    .xia2 {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 15px;
      color: rgb(18, 18, 18);
      font-weight: 600;
      line-height: 24px;
      width: 478px;
      cursor: pointer;
    }
    .xia3 {
      box-sizing: border-box;
      margin: 8px 0px 0px;
      min-width: 0px;
      line-height: 14px;
      color: rgb(153, 153, 153);
      font-size: 14px;
    }
    .waitbutton {
      width: 96px;
      height: 28px;
      line-height: 26px;
      border-radius: 3px;
      color: rgb(255, 255, 255);
      padding: 0px;
      border: 1px solid rgb(5, 109, 232);
      background-color: rgb(5, 109, 232);
      box-sizing: border-box;
      cursor: pointer;
      margin-left: 930px;
    }
    .waitbutton:hover {
      background-color: green;
    }
  }
  .pop_answer {
    text-align: center;
    border: 1px solid rgb(200, 200, 200);
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
    .ans_content {
      margin-top: 10px;
      width: 100%;
      height: 200px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      color: #333;
      background-color: rgb(255, 255, 255, 0.6);
      border: 1px solid #ccc;
      padding: 5px;
    }
    button {
      background-color: wheat;
      padding: 0px 20px;
      font-size: 18px;
      margin: 10px 24px;
      border-radius: 8px;
    }
  }
}
</style>
