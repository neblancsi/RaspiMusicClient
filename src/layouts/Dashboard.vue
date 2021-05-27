<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Dashboard",
  sockets: {
    player_state_change(args) {
      this.$store.commit("PLAYER_STATE_CHANGE", args);
    },
    song_select(arg) {
      const title = arg.snippet.title;
      this.$store.commit("SET_CURRENTLY_PLAYING", title);
    },
    initial_data(arg) {
      this.$store.commit("PLAYER_STATE_CHANGE", arg.playerState);
      this.$store.commit("SET_CURRENTLY_PLAYING", arg.currentlyPlaying);
    },
  },
};
</script>

<style></style>
