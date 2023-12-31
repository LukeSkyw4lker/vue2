import axios from 'axios'
import Qs from 'qs'
let qs = Qs
import router from '@/router'
 
// 创建axios实例对象
let instance = axios.create({
  baseURL:"http://localhost:9527/",
  timeout:5000
})
 
// 请求拦截器
instance.interceptors.request.use(config=>{
    //let token = getToken()
  // console.log(config,'请求配置项');
//   if(config.url !== '登录接口'){
//     config.headers.Authorization = 'token值'
//   }
  return config
},error=>{
  alert('请求失败')
  return Promise.reject(error)
})
 
// 响应拦截器
instance.interceptors.response.use(response=>{
  let res = response.data
  return res
},error=>{
  return Promise.reject(error)
})
 
// 封装get方法并导出
export function get(url,params){
  return instance.get(url,{params})
}
// 封装postJSON方法 (发送json格式数据)
export function postJSON(url,data){
  return instance.post(url,data)
}
// 封装post方法 (发送表单格式数据)
// export function post(url,data={}){
//   return instance.post(url,qs.stringify(data))
// }
export function post(url,data={}){
  return new Promise((resolve,reject) => {
      axios.post(url,data)
      .then(response =>{
          resolve(response.data);
      })
      .catch(err =>{
          reject(err);
      })
  });
}
 
// 导出axios实例
export default instance