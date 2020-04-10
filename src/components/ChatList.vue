<template>
  <div>
    <button v-on:click="createChatRoom">Create Chat Room</button>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  props: {
    uid: {
      required: true,
    },
  },
  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });
    },
  },
};
</script>

<style></style>
