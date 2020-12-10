import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/auth"

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    
    getUser(state){
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            state.user = user
          } else {
            state.user = null
          }
          console.log(state.user)
        });
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store