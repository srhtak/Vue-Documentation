<template>
  <!-- <div class="container">
    {{ $store.state.person }}
    {{ $store.state.permissions }}
  </div> -->

  <userlist />
  <newuser />
</template>

<script>
import Newuser from "./components/newUser.vue";
import Userlist from "./components/userList.vue";
export default {
  name: "App",
  components: {
    Newuser,
    Userlist,
  },
  created() {
    // console.log(this.$store.state.person);
    // console.log(this.$store.getters.frontItem);
    // console.log(this.$store.getters.activeUser);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
