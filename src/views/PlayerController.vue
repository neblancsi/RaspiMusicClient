<template>
  <div class="px-3">
    <b-row align-h="center">
      <currently-playing></currently-playing>
    </b-row>

    <b-row align-h="around">
      <resume></resume>
      <pause></pause
    ></b-row>
  </div>
</template>

<script>
import CurrentlyPlaying from "../components/PlayerController/CurrentlyPlaying.vue";
import Pause from "../components/PlayerController/Pause.vue";
import Resume from "../components/PlayerController/Resume.vue";
export default {
  name: "PlayerController",
  components: { CurrentlyPlaying, Pause, Resume },

  methods: {},
  sockets: {
    connect() {
      console.log("connected");
    },
  },
};
</script>
