<template>
    <div>
        子组件计数器：{{$store.state.total}}
        <ul>
            <li v-for="(item,index) in $store.getters.getUsers" :key="index">{{ item.name }}-{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    
    export default {
        name:"counter",
        computed:{
        ...mapState(['total'])
    }
    }
</script>