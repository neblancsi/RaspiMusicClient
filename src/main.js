import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import VueYoutube from "vue-youtube";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueYoutube);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO(process.env.VUE_APP_SOCKET_URL, {
      withCredentials: true,
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
