<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <bottom-bar v-if="playerState" />
    <volume-control />
  </div>
</template>

<script>
  import BottomBar from "../components/BottomBar.vue";
  import Navbar from "../components/Navbar.vue";
  import VolumeControl from "../components/VolumeControl.vue";

  export default {
    data() {
      return {
        playerState: null,
      };
    },
    components: { Navbar, BottomBar, VolumeControl },
    name: "Dashboard",
    sockets: {
      player_state_change(args) {
        this.$store.commit("PLAYER_STATE_CHANGE", args);
        this.playerState = args;
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
