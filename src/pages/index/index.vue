<template>
    <div>
        计数器: <button type="button">-</button>1<button type="button">+</button>
        <Countercomponent></Countercomponent>
    </div>
</template>


<script lang="ts">
    import Countercomponent from '../../components/button/counter.vue' 
    export default{
        name:"index",
        data(){
            return{
 
            }
        },
        components:{
            Countercomponent
        },
        methods:{
            
        }
    }
</script>
