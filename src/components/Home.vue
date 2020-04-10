<template>
  <div>
    <h2>Home</h2>
    <User v-slot:user="{ userProp }">
      <div v-if="userProp">Logged in as {{ userProp.uid }}</div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User.vue";
export default {
  components: {
    Login,
    User,
  },
};
</script>

<style></style>
