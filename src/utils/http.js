import axios from 'axios';
import router from '../router'


//基础url
axios.defaults.baseURL = "http://120.27.235.151:9527/";
/**
 * 封装get方法
 */
axios.interceptors.request.use({

})
axios.interceptors.response.use({
    
})
 export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
        .then(response =>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);
        })
    });
}

/**
 * 封装post方法
 */
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
