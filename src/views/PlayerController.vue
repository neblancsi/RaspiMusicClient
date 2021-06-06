<template>
  <div class="px-3">
    <b-row align-h="around" align-v="center">
      <resume></resume>
      <player-state-icon :scale="2"/>
      <pause></pause
    ></b-row>
    <h2 class="song-title">{{ escape(currentlyPlaying) }}</h2>
  </div>
</template>

<script>
  import PlayerStateIcon from "../components/PlayerController/PlayerStateIcon.vue";
  import Pause from "../components/PlayerController/Pause.vue";
  import Resume from "../components/PlayerController/Resume.vue";
  import { mapState } from "vuex";
  import { htmlUnescape } from "escape-goat";

  export default {
    name: "PlayerController",
    components: { PlayerStateIcon, Pause, Resume },
    computed: { ...mapState(["currentlyPlaying"]) },

    methods: {
      escape(string) {
        return htmlUnescape(string);
      },
    },
    sockets: {
      connect() {
        console.log("connected");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .song-title {
    color: gray;
  }
</style>
