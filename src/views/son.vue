<template>
    <div>
        <p>{{ text }}</p>
        <span @click="cli">点我</span>
    </div>
</template>
<script>

export default {
    props:["text"],
    props:{
        text:{
            type:String,
            default:"hello"
        }
    },
    data() {
        return {
            sondata:"i am son"
        }
    },
    methods:{
        cli(){
            this.$emit("son",this.sondata)
        }
    },


    
};
</script>

