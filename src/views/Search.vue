<template>
  <div class="px-3">
    <searchbar></searchbar>
    <resultlist v-if="searchResults"></resultlist>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Resultlist from "../components/Search/Resultlist.vue";
import Searchbar from "../components/Search/Searchbar.vue";
export default {
  components: { Searchbar, Resultlist },
  name: "Search",
  computed: {
    ...mapState(["searchResults"]),
  },
};
</script>

<style></style>
