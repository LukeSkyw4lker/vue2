import { reactive } from "vue";
import { get } from "@/utils/http";

export const store = reactive({
    data:[],

    // let id=JSON.stringify(JSON.parse(localStorage.getItem("login")).userId)
    // get("user/select",{id}).then((res)=>{
    //     this.data=res.data
    // })        
})