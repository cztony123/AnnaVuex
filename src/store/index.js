import Vue from 'vue'
import Vuex from 'vuex'
import Counter from '../store/moduls/counter'
import Cart from '../store/moduls/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:8,
    users:[
      {name:"马云",age:20},
      {name:"马化腾",age:28},
      {name:"张小龙",age:18},
      {name:"李彦宏",age:30}
    ]
  },
  mutations: {
    changeTotal(state,payload){
      // console.log(state,payload) 
      state.total = payload.count
    }
  },
  actions: {
    asyncChangeTotal(conText,payload){
      // console.log(conText,payload)
      conText.commit('changeTotal',payload)
    }
  },
  getters: {
    getUsers(state){
      let userList = state.users.filter(item =>{
        return item.age > 18
      })
      return userList
    }
  },
  modules: {
    counter:Counter,
    cart:Cart
  }
})
