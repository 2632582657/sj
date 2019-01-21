import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      num:0
    }
  },
  mutations: {
    setNum(state,val){
      state.num=val
    }
  },
  actions: {

  },
  getters:{
    getNum:function(state){
      return state.num
    }
  }
})
