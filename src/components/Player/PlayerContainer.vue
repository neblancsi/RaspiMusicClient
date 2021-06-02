<template>
  <div>
    <h1>{{ playerState }}</h1>
    <youtube
      :video-id="videoId"
      ref="youtube"
      @playing="playerStateChange('playing')"
      @paused="playerStateChange('paused')"
      @buffering="playerStateChange('buffering')"
      @ended="playerStateChange('ended')"
      :player-vars="playerVars"
    ></youtube>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "PlayerContainer",
    data() {
      return {
        videoId: null,
        playerVars: {
          autoplay: 1,
        },
      };
    },
    methods: {
      playVideo() {
        this.player.playVideo();
      },
      pauseVideo() {
        this.player.pauseVideo();
      },
      playerStateChange(state) {
        this.$socket.emit("player_state_change", state);
      },
      loadVideo(arg) {
        this.player.loadVideoById(arg);
      },
    },
    computed: {
      ...mapState(["playerState"]),
      player() {
        return this.$refs.youtube.player;
      },
    },
    sockets: {
      play_video() {
        this.playVideo();
      },
      pause_video() {
        this.pauseVideo();
      },
      song_select(arg) {
        const id = arg.id.videoId;
        this.loadVideo(id);
      },
    },
  };
</script>
