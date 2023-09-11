<template>
    <div>
        <v-son @son="son" :text="father"></v-son>
    </div>
</template>
<script>
import son from './son.vue';
export default {
    data() {
        return {
            father:"i am father"
        }
    },
    methods:{
        son(data){
            alert(data);
        }
    },
    components:{
        "v-son":son
    }
};
</script>

