<template>
  <b-container class="bottombar px3">
    <marquee behavior="scroll" direction="left">{{
      $store.state.currentlyPlaying
    }}</marquee>
    <b-row align-h="around" align-v="center">
      <resume></resume>
      <pause></pause
    ></b-row>
  </b-container>
</template>

<script>
  import PlayerStateIcon from "./PlayerController/PlayerStateIcon.vue";

  import Pause from "./PlayerController/Pause.vue";
  import Resume from "./PlayerController/Resume.vue";
  export default {
    components: { Pause, Resume, PlayerStateIcon },
    name: "BottomBar",
  };
</script>

<style>
  .bottombar {
    color: rgba(255, 255, 255, 0.5);
    position: fixed;
    bottom: 0;
    background-color: rgba(56, 56, 56, 0.918);
    padding-bottom: 5px;
  }
</style>
