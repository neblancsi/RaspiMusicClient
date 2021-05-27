<template>
  <b-container>
    <b-row align-h="center">
      <b-col col sm="4">
        <b-form @submit.stop.prevent="onSubmit(searchString)">
          <b-form-input v-model="searchString" class="mt-2"></b-form-input>
          <b-button block type="submit" class="mt-2">
            <b-icon-search></b-icon-search>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searchString: null,
    };
  },
  methods: {
    async onSubmit(term) {
      console.log(this.searchString);
      await this.$store.dispatch("search", term);
    },
  },
};
</script>
