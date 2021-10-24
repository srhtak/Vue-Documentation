<template>
  <list-section />
  <add-section />
</template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue";
export default {
  props: ["userList"],
  emits: ["new-item"],
  components: {
    ListSection,
    AddSection,
  },
};
</script>

<style>
</style>