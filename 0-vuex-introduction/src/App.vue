<template>
  <div class="container">
    {{ $store.state.person }}
    {{ $store.state.permissions }}
  </div>
  <ul>
    <li v-for="(item, index) in frontItem" :key="index">
      {{ item.title }}
    </li>
  </ul>
  {{ $store.state.fullName }}
  <newuser />
</template>

<script>
import { mapGetters } from "vuex";
import Newuser from "./components/newUser.vue";
export default {
  name: "App",
  components: {
    Newuser,
  },
  created() {
    // console.log(this.$store.state.person);
    // console.log(this.$store.getters.frontItem);
    // console.log(this.$store.getters.activeUser);
  },
  computed: mapGetters(["frontItem", "activeUser"]),
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
