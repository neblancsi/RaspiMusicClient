<template>
  <div>
    <b-icon
      v-if="playerState == 'buffering'"
      icon="arrow-clockwise"
      animation="spin"
      :font-scale="scale"
    ></b-icon>

    <b-icon
      v-if="playerState == 'paused'"
      icon="pause-fill"
      animation="fade"
      :font-scale="scale"
    ></b-icon>

    <b-icon
      v-if="playerState == 'playing'"
      icon="play-fill"
      :font-scale="scale"
    ></b-icon>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "PlayerStateIcon",
    props: ["scale"],
    computed: { ...mapState(["playerState"]) },
  };
</script>

<style></style>
