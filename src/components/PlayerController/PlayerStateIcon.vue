<template>
  <b-row align-h="center" class="m-2">
    <h1 v-if="playerState == 'buffering'">
      <b-icon
        icon="arrow-clockwise"
        animation="spin"
        :font-scale="scale"
      ></b-icon>
    </h1>
    <h1 v-if="playerState == 'paused'">
      <b-icon icon="pause-fill" animation="fade" :font-scale="scale"></b-icon>
    </h1>
    <h1 v-if="playerState == 'playing'">
      <b-icon icon="play-fill" :font-scale="scale"></b-icon>
    </h1>
  </b-row>
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
