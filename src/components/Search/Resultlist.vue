<template>
  <b-row align-h="center">
    <b-col col sm="4" class="p-4">
      <ul>
        <li v-for="item in searchResults" :key="item.etag">
          <result-card :resultItem="item"></result-card>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
  import { mapState } from "vuex";
  import ResultCard from "./ResultCard.vue";
  export default {
    components: { ResultCard },
    computed: {
      ...mapState(["searchResults"]),
    },
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
  }

  li {
    margin: 5px;
  }
</style>
