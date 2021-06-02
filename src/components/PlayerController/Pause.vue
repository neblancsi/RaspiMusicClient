<template>
  <div>
    <b-button @click="pause_emit()">
      <b-icon-pause-fill></b-icon-pause-fill>
    </b-button>
  </div>
</template>

<script>
  export default {
    name: "Pause",
    methods: {
      pause_emit() {
        this.$socket.emit("pause_video");
      },
    },
    sockets: {
      connect() {
        console.log("connected");
      },
    },
  };
</script>

<style lang="scss" scoped></style>
