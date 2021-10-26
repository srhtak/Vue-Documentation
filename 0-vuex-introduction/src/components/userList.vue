<template>
  <ul>
    <li v-for="(item, index) in frontItem" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      frontItem: "_frontItem",
      activeUser: "_activeUser",
    }),
  },
};
</script>

<style>
</style>