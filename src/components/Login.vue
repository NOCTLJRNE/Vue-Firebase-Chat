<template>
  <aside>
    <h3>Sign In Anonymously</h3>
    <button v-on:click="auth.signInAnonymously()">Sign In</button>
  </aside>
</template>

<script>
import { auth } from "../firebase";
export default {
  data() {
    return {
      auth: auth,
    };
  },
};
</script>

<style></style>
