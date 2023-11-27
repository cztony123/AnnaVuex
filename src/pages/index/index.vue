<template>
    <div>
        计数器: <button type="button" @click="reduce()">-</button>{{total}}<button type="button" @click="increase()">+</button>
        <Countercomponent></Countercomponent>
        <ul>
            <li v-for="(item,index) in getUsers" :key="index">{{ item.name }}-{{item.age}}</li>
        </ul>
    </div>
</template>


<script lang="ts">

//辅助函数 
    import { mapMutations, mapState ,mapActions,mapGetters} from 'vuex'
    import Countercomponent from '../../components/button/counter.vue' 
    export default{
        name:"index", 
        data(){
            return{
                count:1
            }
        },
        components:{
            Countercomponent
        },
        computed:{
            // ...mapState(['total'])
            ...mapState({
                total:(state)=>state.total
            }),
            // ...mapGetters(['getUsers'])
            ...mapGetters({
                getUsers:'getUsers'
            })
        },
        methods:{
            ...mapMutations({
                changeTotal:'changeTotal'
            }),
            //普通写法
            // ...mapActions({
            //     asyncChangeTotal:'asyncChangeTotal'
            // }),

                //数组写法
            ...mapActions(['asyncChangeTotal']),
            //增加数量
            increase(){



                //辅助函数-------------------------------------------------------------------------------------------



                //对应的是...mapMutations
                // this.changeTotal({count:++this.count})

                //对应的是...mapActions
                this.asyncChangeTotal({count:++this.count})



                //commit对应的就是state的mutation
                // this.$store.commit("changeTotal",{count:++this.count}); 
                // this.$store.dispatch('asyncChangeTotal', {count:++this.count})
            },
            //减少数量
            reduce(){
                // this.$store.commit("changeTotal",{count:this.count>1?--this.count: this.count}); 
                // this.$store.dispatch('asyncChangeTotal', {count:this.count>1?--this.count: this.count})

                this.asyncChangeTotal({count:this.count>1?--this.count: this.count})
            }
            

        },
        created(){
            // console.log(this.$store.state.total)
            console.log(this.$store.getters.getUsers)
        }
    }
</script>
