<template>
  <button @click="uptadeName">Change Fullname</button>
</template>

<script>
export default {
  methods: {
    uptadeName() {
      this.$store.state.itemList.push({
        id: 4,
        title: "swift",
        type: "react.js",
      });
      this.$store.state.fullName = new Date().getTime();
    },
  },
};
</script>

<style>
</style>