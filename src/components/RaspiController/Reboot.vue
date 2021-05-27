<template>
  <b-row align-h="center">
    <b-col col sm="4">
      <b-button class="mt-2 w-100" @click="reboot_emit()">
        <svg
          height="50px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <g>
            <path
              style="fill: #54e360"
              d="M484.999,221.8L464,33l-40.5,28.8C377.3,21.899,317.5,0,256,0C115.3,0,0,115.3,0,256v15h90v-15
		c0-90.901,75.099-166,166-166c32.1,0,64.3,9.3,90.7,26.7l-28.799,20.698L484.999,221.8z"
            />
            <path
              style="fill: #54e360"
              d="M512,241v15c0,142.5-116.8,256-256,256c-61.5,0-121.3-21.901-167.5-61.8l-40.501,28.799
		L27.001,290.2l167.098,84.399L165.3,395.3c26.4,17.4,58.6,26.7,90.7,26.7c90.901,0,166-75.101,166-166v-15H512z"
            />
          </g>
          <g>
            <path
              style="fill: #00cc71"
              d="M346.7,116.7C320.3,99.3,288.1,90,256,90V0c61.5,0,121.3,21.899,167.5,61.8l40.501-28.801
		L485,221.799l-167.098-84.401L346.7,116.7z"
            />
            <path
              style="fill: #00cc71"
              d="M512,241v15c0,142.5-116.8,256-256,256v-90c90.901,0,166-75.101,166-166v-15H512z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>

        <span class="p-2">Újraindítás</span>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Reboot",
  methods: {
    reboot_emit() {
      this.$socket.emit("reboot");
    },
  },
  sockets: {
    connect() {
      console.log("connected");
    },
  },
};
</script>

<style></style>
