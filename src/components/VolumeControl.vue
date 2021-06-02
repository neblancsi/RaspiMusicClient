<template>
  <div class="volume">
    <b-button-group vertical>
      <b-button @click="volume_emit('up')" v-if="volumeOpen">
        <b-icon icon="plus"></b-icon>
      </b-button>
      <b-button @click="toggleMenu()">
        <b-icon icon="volume-up-fill"></b-icon>
      </b-button>
      <b-button @click="volume_emit('down')" v-if="volumeOpen">
        <b-icon icon="dash"></b-icon>
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    name: "VolumeControl",
    data() {
      return {
        volumeOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.volumeOpen = !this.volumeOpen;
      },
      volume_emit(direction) {
        this.$socket.emit("volume_" + direction);
      },
    },
  };
</script>

<style>
  .volume {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
