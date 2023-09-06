<template>
  <div>
    <div v-for="(item, index) in List" :key="index">
      <div class="hot">
        <div class="img-t">
          <img class="img1" src="../assets/img/3.1 好友.png" alt="" />
        </div>
        <div class="hot_x">
          <ul>
            <li>昵称:{{ item.uname }}</li>
            <li>账号:{{ item.upass }}</li>
            <li>亲密度:80%</li>
          </ul>
        </div>
        <div class="hot_m">
          <a href="#" title="社区的服务质量如何？">
            <h2 class="HotItem-title">社区的服务质量如何？</h2>
            <p class="HotItem-excerpt">
              社区服务专业化。一是推行社区项目经理人计划，选调有职业资格、项目运作经验的社区工作者组件社区社会工作服务团队，通过“团队+项目”的形式提高专业化水平，为居民提高专业服务。二是实施政府购买社区服务，购买社会满意度高的长期性服务项目的服务岗位、购买社区服务项目的品牌等，鼓励社区服务机构的市场化经营。三是与社会力量合作，建立专项社区服务基金，搭建多主体参与、多元化筹资的机构项目资金运作、公益创投平台。
            </p></a
          >
          <div class="hot_l">
            <ul class="hot_ul">
              <li class="hot_d">点赞</li>
              <li class="hor_f">评论</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="hot">
        <div class="img-t">
          <img class="img1" src="../assets/img/3.1 好友.png" alt="">
        </div>
        <div class="hot_x ">
        <ul>
          <li>昵称:</li>
          <li>id:</li>
        </ul>
       </div>
      <div class="hot_m">
        <a href="#" title="当前社区建设面临哪些主要问题？">
          <h2 class="HotItem-title">当前社区建设面临哪些主要问题？</h2>
       <p class="HotItem-excerpt">一是社区的职能定位不够明确。二是社区建设的组织管理体制不健全。三是社区居民与社区中的单位参与社区建设的意识不强。</p></a>
     <div class="hot_l">
              <ul class="hot_ul">
                 <li class="hot_d">点赞</li>
                <li class="hor_f">评论</li>
              </ul>
          </div>
       </div>  
      </div>
   
    <div class="hot">
          <div class="img-t">
            <img class="img1" src="../assets/img/3.1 好友.png" alt="">
          </div>
          <div class="hot_x ">
          <ul>
            <li>昵称:</li>
            <li>id:</li>
          </ul>
         </div>
        <div class="hot_m">
          <a href="#" title="浅谈社区服务存在的问题及其对策？">
            <h2 class="HotItem-title">浅谈社区服务存在的问题及其对策？</h2>
         <p class="HotItem-excerpt">在现代城市管理中，社区建设是其中必不可少的构成部分。随着社区建设的发展，其在文化、服务、治安等层面存在不少缺陷和弊端，对社区建设造成不同程度的影响，若想有效解决此类问题，需要相关职能部门通过理论与实践相结合，全面加强社区建设的深度与广度。社区是连接群众与政府的基层组织，其主要职责在于为广大群众提供各类生活服务，维护社区公共卫生、维持社会治安环境等。社区工作可以视为为了推动社区健康和谐发展而制定的各项工作任务，并将其细化到各项公共服务职能中，坚持"人本主义"的服务理念。从当前国内的社区建设的服务体系分析，确实存在不少亟需解决的问题。
        </p></a>
       <div class="hot_l">
                <ul class="hot_ul">
                   <li class="hot_d">点赞</li>
                  <li class="hor_f">评论</li>
                </ul>
            </div>
         </div>  
      </div>
 
    <div class="hot">
            <div class="img-t">
              <img class="img1" src="../assets/img/3.1 好友.png" alt="">
            </div>
            <div class="hot_x ">
            <ul>
              <li>昵称:</li>
              <li>id:</li>
            </ul>
           </div>
          <div class="hot_m">
            <a href="#" title="志愿服务进社区，爱心清扫净冯道 ？">
              <h2 class="HotItem-title">志愿服务进社区，爱心清扫净冯道 ？</h2>
           <p class="HotItem-excerpt"> 为充分践行“两邻”理念，进一步优化环境卫生，6月28日下午，市自然资源局沈北分局组织党员干部前往冯道社区开展“志愿服务进社区，爱心清扫净冯道”志愿服务活动，“清洁+宣传”相结合，在做好社区志愿服务，将生态理念带进社区。</p></a>
         <div class="hot_l">
                  <ul class="hot_ul">
                     <li class="hot_d">点赞</li>
                    <li class="hor_f">评论</li>
                  </ul>
              </div>
           </div>  
      </div>
 
    <div class="hot">
              <div class="img-t">
                <img class="img1" src="../assets/img/3.1 好友.png" alt="">
              </div>
              <div class="hot_x ">
              <ul>
                <li>昵称:</li>
                <li>id:</li>
              </ul>
             </div>
            <div class="hot_m">
              <a href="#" title="我国村镇社区建设的绿色“碳”索">
                <h2 class="HotItem-title">我国村镇社区建设的绿色“碳”索？</h2>
             <p class="HotItem-excerpt">村镇低碳社区建设是我国开展节能减排和发展低碳经济的重要一环。随着城市产业更迭及村镇小微产业集聚，高碳产业逐步由城市向村镇渗透、转移，发达村镇成为人居高碳的突出点。如何有效地识别村镇社区的碳要素信息，建构具有地域适宜性的碳排放评价体系，这是实现人居环境适应性发展的关键。浙江工业大学朱晓青教授等所著《村镇低碳社区要素解析与营建导控》一书，从低碳社区建设的角度出发，深入剖析了村镇低碳社区要素及其营建路径，对于推动我国村镇低碳社区建设和人居环境的可持续发展具有重要的理论和实践意义。</p></a>
           <div class="hot_l">
                    <ul class="hot_ul">
                       <li class="hot_d">点赞</li>
                      <li class="hor_f">评论</li>
                    </ul>
                </div>
             </div>  
      </div>
 
    <div class="hot">
                <div class="img-t">
                  <img class="img1" src="../assets/img/3.1 好友.png" alt="">
                </div>
                <div class="hot_x ">
                <ul>
                  <li>昵称:</li>
                  <li>id:</li>
                </ul>
               </div>
              <div class="hot_m">
                <a href="#" title="社区志愿服务活动？">
                  <h2 class="HotItem-title">社区志愿服务活动？</h2>
               <p class="HotItem-excerpt">　为进一步加强社区环境卫生综合整治,改善辖区市容市貌,优化人居环境，创建美好家园，构建和谐社区。我社区开展了主题为“清洁环境卫生，确保居民健康”的清洁家园志愿服务活动。社区工作人员、社区志愿者、居民组长组成清洁家园志愿服务队伍，积极参与活动。</p></a>
             <div class="hot_l">
                      <ul class="hot_ul">
                         <li class="hot_d">点赞</li>
                        <li class="hor_f">评论</li>
                      </ul>
                  </div>
               </div>  
      </div>
 
    <div class="hot">
                  <div class="img-t">
                    <img class="img1" src="../assets/img/3.1 好友.png" alt="">
                  </div>
                  <div class="hot_x ">
                  <ul>
                    <li>昵称:</li>
                    <li>id:</li>
                  </ul>
                 </div>
                <div class="hot_m">
                  <a href="#" title="社区服务有哪些内容和项目？">
                    <h2 class="HotItem-title">社区服务有哪些内容和项目？</h2>
                 <p class="HotItem-excerpt">社区服务是指以社区为基本单元，以各类社区服务设施为依托，以社区全体居民、驻社区单位为对象，以公共服务、志愿服务、便民利民服务为主要内容，以满足社区居民生活需求、提高社区居民生活质量为目标，党委统一领导、政府主导支持、社会多元参与的服务网络及运行机制。
                  1.社区服务不只是一些社会自发性和志愿性的服务活动，而是有指导，有组织，有系统的服务体系；
                  2.社区服务不是一般的社会服务产业，它与经营性的社会服务业是有区别的；
                  3.社区服务不是仅由少数人参与的为其他人提供服务的社会活动，它是以社区全体居民的参与为基础，以自助与互助相结合的社会公益活动。</p></a>
               <div class="hot_l">
                        <ul class="hot_ul">
                           <li class="hot_d">点赞</li>
                          <li class="hor_f">评论</li>
                        </ul>
                    </div>
                 </div>  
    </div> -->
    </div>
  </div>
</template>

<script>
import { get } from "../utils/http";
import axios from "axios";
import router from "@/router";
export default {
  components: {},
  props: {},
  data() {
    return {
      imgsrc: "",
      username: "",
      title: "",
      content: "",
      good: "",
      List: "",
    };
  },
  watch: {},
  created() {
    get("selectuser").then((res) => {
      // console.log(res);
      //res即为json数据，响应拦截器已封装好
      this.List = res;
      // console.log(this.List);
    },(err)=>{
      console.log(err)
      

    });
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.hot {
  border-bottom: 1px solid rgb(200, 200, 200);
  .img-t {
    padding-left: 20px;
    width: 60px;
    height: 60px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  position: relative;
  width: 678px;
  height: 105px;
  display: flex;
  outline: none;
  padding: 16px 16px 16px 0;
  .hot_x {
    width: 150px;
    height: 105px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-synthesis: style;
    font-weight: 600;
    font-size: 14px;
    line-height: 2;
    margin-left: 6px;
    .li {
      font-size: 13px;
    }
  }
  .hot_color {
    color: #ff9607;
  }
  .hot_m {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    overflow: hidden;
  }
  .HotItem-title {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 18px;
    font-synthesis: style;
    font-weight: 600;
    line-height: 28px;
    max-height: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .HotItem-excerpt {
    line-height: 25px;
    margin-top: 2px;
    min-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .HotItem-excerpt {
    color: #444;
  }
  .hot_l {
    width: 178px;
    height: 16px;
    margin: 8px 16px;
    font-size: 14px;
    height: 16px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    .hot_ul {
      display: flex;
      justify-content: space-around;
      width: 100px;
      margin-left: 300px;
      cursor: pointer;
      .hot_d:hover {
        background-color: pink;
      }
      .hor_f:hover {
        background-color: pink;
      }
    }
  }
  .img-w {
    padding-left: 10px;

    .img2 {
      height: 105px;
      width: 190px;
    }
  }
}
</style>
