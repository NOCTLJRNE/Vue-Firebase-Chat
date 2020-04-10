<template>
  <div>
    <p>Logged In as {{ user.uid }}</p>
    <button v-on:click="userSignOut">Sign Out</button>
  </div>
</template>

<script>
import { auth } from "../firebase";
export default {
  props: {
    user: {
      required: false,
    },
  },
  methods: {
    userSignOut() {
      auth.signOut();
    },
  },
};
</script>

<style></style>
