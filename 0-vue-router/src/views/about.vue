<template>
  <h1>About</h1>
  <button @click="goBack">Back to Home Page</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>