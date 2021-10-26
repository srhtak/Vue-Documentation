<template>
  <button @click="uptadeName">Change Fullname</button>
</template>

<script>
export default {
  methods: {
    uptadeName() {
      const userData = {
        id: new Date().getTime(),
        title: "swift" + new Date().getTime(),
        type: "react.js",
      };
      this.$store.dispatch("newItem", userData);
    },
  },
};
</script>

<style>
</style>