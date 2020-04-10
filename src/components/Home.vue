<template>
  <div>
    <h2>Home</h2>
    <User v-slot:user="{ userProp }">
      <div v-if="userProp">
        <UserProfile v-bind:user="userProp" />
      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User.vue";
import UserProfile from "./UserProfile.vue";
export default {
  components: {
    Login,
    User,
    UserProfile,
  },
};
</script>

<style></style>
