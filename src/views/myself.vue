<template>
    <div class="body">
        <v-header :nickname="data.userNickname"></v-header>
        <div class="review_box">
            <!-- 1.父元素盒子 -->
            <div class="review_head">
                <img src="../assets/img/cherry-blossom-tree-1225186_1280.jpg" alt="">
                <div class="review_icon">
                    <img class="icon_img" src="../assets/img/logo.png" alt="">
                   <span>{{ data.userNickname }}</span> 
                </div>
                
            </div>
            <div class="review_text_box">
               <div class="review_text">
                    <div class="text">
                        <img src="../assets/img/默认头像ICON.png" alt="">
                        <div class="text_name">
                            <span>你的昵称</span>
                            <div class="time">05月12日</div>
                        </div>
                        <div class="core">
            
                            转发动态
                            <div class="link">
                                <a href="#">震惊，00后竟无一人活至25岁，原因竟然是...</a>
                            </div>
                        </div>
                    
                    </div>
                    <div class="text">
                        <img src="../assets/img/默认头像ICON.png" alt="">
                        <div class="text_name">
                            <span>你的昵称</span>
                            <div class="time">04月27日</div>
                        </div>
                        <div class="core">
            
                            转发动态
                            <div class="link">
                                <a href="#">十年脑血栓问出二十年脑血栓问题，是病情加重了吗？</a>
                            </div>
                        </div>
                    
                    </div>
                    <div class="text">
                        <img src="../assets/img/默认头像ICON.png" alt="">
                        <div class="text_name">
                            <span>你的昵称</span>
                            <div class="time">01月22日</div>
                        </div>
                        <div class="core">
            
                            转发动态
                            <div class="link">
                                <a href="#">一养猪场百头母猪半夜频频惨叫，真相竟然是...</a>
                            </div>
                        </div>
                    
                    </div>
               </div>
               <div class="review_message">
                <b>个人资料</b>
                <button  @click="showpop">修改资料</button>
                <div class="message">
                    <div class="user_info"><span>昵称：{{data.userNickname}}</span>
                    </div>
                    <div class="user_info"><span>性别：</span></div>
                    <div class="user_info"><span>生日：</span></div>
                    <div class="user_info"><span>房屋住址：</span></div>
                    <div class="user_info"><span>籍贯：</span></div>
                </div>
               </div>
            </div>
        </div>
         <!-- 修改信息弹窗 -->
         <div class="pop_wrapper" v-if="ifshow">
            <div class="message">
                <div class="user_info"><span>昵称：</span><input v-model="nickname" type="text" id="username"><br></div>
                <div class="user_info"><span>性别：</span> <input type="text" id="sex"><br></div>
                <div class="user_info"><span>生日：</span><input type="text" id="birthday"><br></div>
                <div class="user_info"><span>房屋住址：</span> <input type="text" id="house"><br></div>
                <div class="user_info"><span>籍贯：</span><input type="text" id="location"><br></div>
            </div>
            <div class="pop_bt">
                <button @click="showpop">取消修改</button>
                <button @click="commit">确认修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    import headerView from '@/components/headerView'
    import {get,post} from "@/utils/http"
    export default {
        name:"myself",
        components: {'v-header':headerView},
        data(){
            return{
                ifshow:false,
                username:"",
                birthday:"",
                location:"",
                house:"",
                sex:"",
                phone:"",
                // res:JSON.parse(localStorage.getItem("login")),
                data:[],
                nickname:"",
            }
        },
        created(){
            let id=JSON.stringify(JSON.parse(localStorage.getItem("login")).userId)
            get("user/select",{id}).then((res)=>{
                this.data=res.data
            })
        },
        methods:{
            showpop(){
                this.ifshow=!this.ifshow;
            },
            commit(){
                let id=JSON.stringify(JSON.parse(localStorage.getItem("login")).userId)
                post("user/updata",{
                    userId:id,
                    userNickname:this.nickname
                }).then(res=>{
                    if(res.code==200){
                        this.ifshow=!this.ifshow;
                        alert("修改成功！")
                        get("user/select",{id}).then((res)=>{
                            this.data=res.data
                            localStorage.setItem("login", JSON.stringify(res.data));
                            this.$router.go(0)
                        })                       
                    }else{
                        alert(res.msg);
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.body{
    background:#f6f6f6 ;
    height: 710px;
}
.review_box{//1.父元素盒子
   
    margin: 0 auto;
    width: 1283px;
    .review_head{
        position: relative;
        width: 100%;
        height: 192px;
        //margin: 0 auto;
        
        img{
            
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
        }
        span{
            margin-left: 10px;
        }
        .review_icon{
            
            position: absolute;
            top:115px;
            left: 50px;
            vertical-align: middle;
            
            .icon_img{
                //border: 6px solid #6161ef;
                border-radius: 50%; 
                vertical-align: middle;
                width: 50px;
            }
        }
        
    }
    .review_text_box{
        margin-top: 20px;
        display: flex;
        .review_text{
            
            width: 900px;

            height: 300px;
           
            .text{
                background: white;
                position: relative;
                
                margin-bottom: 10px;
                padding-top: 10px;
                padding-left: 60px;
                img{
                    vertical-align: middle;
                    width: 48px;
                    left: 15px;
                    position: absolute;
                }
               .text_name{
                    padding: 5px 0 0 10px;
                    span{
                        font-size: 17px;
                        color: rgb(251,144,153);
                    }
                    .time{
                        font-size: 12px;color:#99a2aa
                    }
                }
                .core{
                    padding: 5px 0 15px 10px;
                    .link{
                        margin-top: 15px;
                        height: 30px;
                        width: 750px;
                        background: #c0c9cc;
                        a{
                            display: block;
                            padding:5px;
                        }
                    }
                }
            }
           
        }
        .review_message{
            flex: 1;
            background: white;
            margin-left: 10px;
            b{
                display: inline-block;
                margin-top: 10px;
                margin-left: 20px;
            }
            button{
                margin-top: 10px;
                width: 66px;
                margin-right: 20px;
                float: right;
                border-radius: 4px;
                color:#9499a0;
                background: none;
                border: .5px solid #c0c9d4;
            }
            button:hover{
                background-color: rgb(250,235,215,0.8);
                cursor: pointer;
            }
            .message{
                padding: 0 20px;
               margin:10px auto;
               width: 80%;
               border-top: 1px solid;
                .user_info{
                    display:flex;
                    padding:10px;
                }
                input{
                    outline:none;
                    border:none;
                }
            }
        }
    }
}
.pop_wrapper{
    text-align: center;
    border:1px solid rgb(200,200,200);
    padding: 20px;
    position: fixed;
    width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background: white;
    .message{
       padding: 0 20px;
       width: 80%;
        .user_info{
            display:flex;
            padding:10px;
        }
        input{
            outline:none;
            border:none;
            border-bottom: 1px solid rgb(200,200,200);
        }
    }
    .pop_bt{
        display: flex;
        justify-content: space-between;
        width: 300px;
        padding-left: 100px;
        padding-top: 20px;
        button{
            text-align: center;
            background-color: #f6f6f6;
            padding: 5px 10px;
            border-radius: 8px;
        }
        button:hover{
            background:rgb(0,255,255,0.6);
            cursor: pointer;
        }
    }
}

</style>