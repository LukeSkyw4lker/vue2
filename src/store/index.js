// 引入 vue
import Vue from 'vue'
//引入 vuex
import Vuex from 'vuex'
import { get } from '@/utils/http'

//安装vuex插件
Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  state: {
    nikename: '',
    num:1,
  },
  mutations: {
    getdata(state,data) {
      state.nikename = data
    }

  },
  actions: {
    // getdata(context) {
    //   let id = JSON.stringify(JSON.parse(localStorage.getItem("login")).userId)
    //   console.log("id",id)
    //   get("user/select", { id }).then((res) => {
    //     context.commit("getdata",res.data)
    //     console.log("res1",res.data)
    //   })
    // }

  },
  getters: {

  },
  modules: {

  }
})

//导出store对象
export default store;