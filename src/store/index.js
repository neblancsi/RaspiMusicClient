import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerState: null,
    searchResults: null,
    currentlyPlaying: null,
  },
  actions: {
    async search({ commit }, term) {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: term,
            maxResults: 10,
            type: "video",
            videoEmbeddable: "true",
            key: process.env.VUE_APP_YT_API_KEY,
          },
        }
      );
      const result = res.data.items;
      commit("SET_SEARCH_RESULTS", result);
    },
  },
  mutations: {
    PLAYER_STATE_CHANGE(state, payload) {
      state.playerState = payload;
    },
    SET_SEARCH_RESULTS(state, payload) {
      state.searchResults = payload;
    },
    SET_CURRENTLY_PLAYING(state, payload) {
      state.currentlyPlaying = payload;
    },
  },
});
