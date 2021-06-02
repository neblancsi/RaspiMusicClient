<template>
  <div>
    <b-button @click="play_emit()">
      <b-icon-play-fill></b-icon-play-fill>
    </b-button>
  </div>
</template>

<script>
  export default {
    name: "Resume",
    methods: {
      play_emit() {
        this.$socket.emit("play_video");
      },
    },
    sockets: {
      connect() {
        console.log("connected");
      },
    },
  };
</script>
