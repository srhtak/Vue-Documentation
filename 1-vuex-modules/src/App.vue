<template>
  <p>
    {{ $store.state.mainName }}
  </p>
  <p>
    {{ $store.state.contact.contactName }}
  </p>
</template>

<script>
export default {
  name: "App",
};
</script>

