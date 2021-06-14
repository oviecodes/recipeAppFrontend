import Vue from "vue";
import Vuex from "vuex";
import Results from "./results.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Results
  }
});
