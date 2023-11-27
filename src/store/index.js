import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
    total:1 ,
    users:[
      {name:"马云",age:20},
      {name:"马化腾",age:28},
      {name:"张小龙",age:18},
      {name:"李彦宏",age:30},
    ]
  }, 
  getters: {
    //逻辑问题都写在getters里边
    getUsers(state ){
      let usersList=state.users.filter((item)=>{
        return item.age>18
      })
      return usersList
    }
  },
  mutations: {
    changeTotal (state,payload){
      // console.log(state,payload)
      state.total=payload.count;
    }
  },
  actions: {
    asyncChangeTotal( conText,payload){
      //  console.log(conText)
      //调用了mutations里边的changeTotal
       conText.commit("changeTotal",payload )
    }
  },
  modules: {
  }
})
