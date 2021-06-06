<template>
  <b-container class="bottombar px3">
    <marquee behavior="scroll" direction="left">{{
      escape($store.state.currentlyPlaying)
    }}</marquee>
    <b-row align-h="around" align-v="center">
      <resume></resume>
      <pause></pause
    ></b-row>
  </b-container>
</template>

<script>
  import PlayerStateIcon from "./PlayerController/PlayerStateIcon.vue";
  import { htmlUnescape } from "escape-goat";

  import Pause from "./PlayerController/Pause.vue";
  import Resume from "./PlayerController/Resume.vue";
  export default {
    methods: {
      escape(string) {
        return htmlUnescape(string);
      },
    },
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
    border-top: 1px solid black;
    padding-bottom: 5px;
  }
</style>
