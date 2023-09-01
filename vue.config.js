const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // pages: {
	//   index:{
	// 	  entry:'./src/main.js'
	//   },
  // },
  devServer: {
    //配置一个代理
	  proxy:'http://localhost:8080',

    //配置多个代理
    // proxy:{
    //   '/api01':{ 
    //       target:'http://localhost:5000',
    //       // 重写请求
    //       pathRewrite:{
    //           '^/api01':''
    //       }
    //   },
    //   '/api02':{
    //       target:'http://localhost:5001',
    //       // 重写请求
    //       pathRewrite:{
    //           '^/api02':''
    //       }
    //   }
  }

  //开启服务代理器（方式二）可以实现多个代理
  //  devServer: {
  //     proxy: {
  //       '/api': {//请求前缀
  //         target: 'http://127.0.0.1:8888',
		//   pathRewrite:{'^/api':''},//匹配所有/api换位空字符
  //         ws: true,//用于支持websocket
  //         changeOrigin: true//用于控制请求头中的host值
  //       },
		// //配置多个代理
		// '/susu': {//修改请求前缀
		//   target: '<url>',
		//   pathRewrite:{'^/api':''},//匹配所有/api换位空字符
		//   ws: true,//用于支持websocket
		//   changeOrigin: true//用于控制请求头中的host值
		// },
  //     }
  //   }
    
    
}