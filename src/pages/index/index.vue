<template>
    <div>
        计数器: <button type="button" @click="reduce()">-</button> {{ total }} <button type="button" @click="increase()">+</button>
        <Countercomponent></Countercomponent>
        <ul>
            <li v-for="(item, index) in users" :key="index">{{ item.name }}-{{ item.age }}</li>
        </ul>
    </div>
</template>


<script lang="ts">

//辅助函数
import {mapActions, mapMutations, mapState} from 'vuex'
import Countercomponent from '../../components/button/counter.vue'
export default {
    components: {
        Countercomponent
    },
    data() {
        return {
            count: this.$store.state.total
        }
    },
    computed: {
        //辅助函数方法1:  ...扩展运算符 固定写法 获取state里的值
        // ...mapState(['total','users'])
        //辅助函数方法2:  对象写法
        ...mapState({
            total: (state)=>state.total,
            users: (state)=>state.users
        })
    },
    methods: {
        //辅助函数mapMutations方法
        ...mapMutations({
            changeTotal: 'changeTotal'
        }),
        ...mapActions({
           asyncChangeTotal: 'asyncChangeTotal' 
        }),
        //增加数量
        increase() {
            //通过commit()固定语法 操作state
            // this.$store.commit('changeTotal',{count:++this.count})
            //通过dispatch()固定语法 操作mutations
            // this.$store.dispatch('asyncChangeTotal', { count: ++this.count })
            //辅助函数辅助函数mapMutations方法方法
            // this.changeTotal({ count: ++this.count })
            //辅助函数辅助函数mapMutations方法方法
            this.asyncChangeTotal({ count: ++this.count })
        },
        //减少数量
        reduce() {
            // this.$store.commit('changeTotal',{count: this.count > 1 ? --this.count : this.count})
            // this.$store.dispatch('asyncChangeTotal', { count: this.count > 1 ? --this.count : this.count })
            // this.changeTotal({ count: this.count > 1 ? --this.count : this.count })
            this.asyncChangeTotal({ count: this.count > 1 ? --this.count : this.count })

        }


    },
    created() {
        // console.log(this.$store.state.total)
        console.log(this.$store.getters.getUsers)
    }
}
</script>
