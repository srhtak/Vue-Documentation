<template>
  <div class="container">
    <h3>my container</h3>
    <UserSection :userList="userList" @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";

export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Serhat", "Gokhan", "Tayfun", "Handan", "Asli"],
      },
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
  provide() {
    return {
      newItem: this.newItem,
      userList: this.provideData.userList,
    };
  },
};
</script>

<style>
</style>