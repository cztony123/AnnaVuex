<template>
    <div>
        计数器: <button type="button" @click="reduce()">-</button>{{ $store.state.counter.total }}<button type="button" @click="increase()">+</button>
    购物车数量: <button type="button" @click="careDecrease()">-</button>{{ $store.state.cart.total }} <button type="button" @click="careIncrease()">+</button>
        <Countercomponent></Countercomponent>
        <span @click="goPage('/login')">会员登录</span>
    </div>
</template>


<script lang="ts">

//辅助函数
import {mapActions, mapMutations, mapState} from 'vuex'
import Countercomponent from '../../components/button/counter.vue'
// import { count } from 'count'
export default {
    name: "index",
    components: {
        Countercomponent
    },
    data() {
        return {
            count: 1
        }
    },
    // computed: {
    //     //辅助函数方法1:  ...扩展运算符 固定写法 获取state里的值
    //     // ...mapState(['total','users'])
    //     //辅助函数方法2:  对象写法
    //     ...mapState({
    //         total: (state)=>state.total,
    //         users: (state)=>state.users
    //     })
    // },
    methods: {
        //辅助函数mapMutations方法
        // ...mapMutations({
        //     changeTotal: 'changeTotal'
        // }),
        // ...mapActions({
        //    asyncChangeTotal: 'asyncChangeTotal' 
        // }),
        //计数器增加数量
        increase() {
            this.$store.commit('counter/changeTotal', {count:++this.count})
        },
        //购物车增加数量
        careIncrease() {
            this.$store.commit('cart/changeTotal', {count:++this.count})
        },
        //购物车减少数量
        careDecrease() {
            this.$store.commit('cart/changeTotal', {count:this.count>1?--this.count:this.count})

        },
         //计数器减少数量
         reduce() {
            this.$store.commit('counter/changeTotal', {count:this.count>1?--this.count:this.count})

        },
        goPage(url){
            this.$router.push(url)
        }

    },
    created() {
        
    }
}
</script>
