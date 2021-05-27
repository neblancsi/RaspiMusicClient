<template>
  <div class="px-3">
    <shut-down></shut-down>
    <reboot></reboot>
  </div>
</template>

<script>
import Reboot from "../components/RaspiController/Reboot.vue";
import ShutDown from "../components/RaspiController/ShutDown.vue";
export default {
  components: { ShutDown, Reboot },
};
</script>

<style Reboot></style>
