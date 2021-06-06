<template>
  <b-card
    :title="escape(resultItem.snippet.title)"
    :img-src="resultItem.snippet.thumbnails.high.url"
    img-alt="Image"
    img-top
    tag="article"
    class="w-100"
  >
    <b-button
      @click="song_select_emit(resultItem)"
      variant="dark"
      class="play-button"
    >
      <b-icon icon="play"></b-icon>
    </b-button>
  </b-card>
</template>

<script>
  import { htmlUnescape } from "escape-goat";

  export default {
    props: ["resultItem"],
    methods: {
      song_select_emit(data) {
        this.$socket.emit("song_select", data);
      },
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
  .play-button {
    float: right;
  }
</style>
