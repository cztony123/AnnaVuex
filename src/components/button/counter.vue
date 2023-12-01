<template>
    <div>
        子组件计数器：{{$store.state.counter.total}}
        
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