<template>
  <h1>Home</h1>
  <router-link class="navLink" to="/">Home</router-link>
  <router-link class="navLink" to="/about">About</router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.navLink {
  padding: 5px 10px;
  margin-left: 2rem;
  color: black;
  text-decoration: none;
  background: #fa6558;
  transition: 0.5s;
}
.navLink:hover {
  color: #fa6558;
  background-color: black;
}
</style>