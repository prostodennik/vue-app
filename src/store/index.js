import Vue from 'vue'
import Vuex from 'vuex'
import generates  from "./modules/generates";
import cost  from "./modules/cost";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    generates,
    cost
  },
  mutations: {
      // initialiseStore(state) {
      //   if(localStorage.getItem('store')) {
      //     this.replaceState(
      //       Object.assign(state, JSON.parse(localStorage.getItem('store')))
      //     );
      //   }
      // }
  }
});

// store.subscribe((mutation, state) => {
// 	localStorage.setItem('store', JSON.stringify(state));
// });

