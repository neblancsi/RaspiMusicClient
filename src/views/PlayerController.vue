<template>
  <div class="px-3">
    <!-- <b-row align-h="center">
    </b-row> -->

    <b-row align-h="around" align-v="center">
      <resume></resume>
      <player-state-icon :scale="2"/>
      <pause></pause
    ></b-row>
    <h2>{{ currentlyPlaying }}</h2>
  </div>
</template>

<script>
  import PlayerStateIcon from "../components/PlayerController/PlayerStateIcon.vue";
  import Pause from "../components/PlayerController/Pause.vue";
  import Resume from "../components/PlayerController/Resume.vue";
  import { mapState } from "vuex";

  export default {
    name: "PlayerController",
    components: { PlayerStateIcon, Pause, Resume },
    computed: { ...mapState(["currentlyPlaying"]) },

    methods: {},
    sockets: {
      connect() {
        console.log("connected");
      },
    },
  };
</script>
