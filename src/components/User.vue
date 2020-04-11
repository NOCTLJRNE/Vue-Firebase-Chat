<template>
  <div>
    <slot name="user" v-bind:userProp="user"></slot>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { auth } from "../firebase";

export default {
  setup() {
    const user = ref(null);
    const unsubscibre = auth.onAuthStateChanged(
      (fbUser) => (user.value = fbUser)
    );
    return {
      user,
      unsubscibre,
    };
  },
  destroyed() {
    this.unsubscibre();
  },
};
</script>

<style></style>
