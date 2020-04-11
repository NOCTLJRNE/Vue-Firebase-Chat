<template>
  <main class="section">
    <h2>Welcome to {{ chatRoomID }}</h2>
    <router-link to="/">Back</router-link>
  </main>
</template>

<script>
export default {
  computed: {
    chatRoomID() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
