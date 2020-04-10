<template>
  <div>
    <h2>Home</h2>
    <User v-slot:user="{ userProp }">
      <div v-if="userProp">
        <UserProfile v-bind:user="userProp" />
        <ChatList v-bind:uid="userProp.uid" />
      </div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User.vue";
import UserProfile from "./UserProfile.vue";
import ChatList from "./ChatList.vue";
export default {
  components: {
    Login,
    User,
    UserProfile,
    ChatList,
  },
};
</script>

<style></style>
