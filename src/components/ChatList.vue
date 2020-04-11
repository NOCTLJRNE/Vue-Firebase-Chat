<template>
  <div>
    <button v-on:click="createChatRoom">Create Chat Room</button>
    <ul>
      <li v-for="chat in chats" :key="chat.id">
        <router-link v-bind:to="{ name: 'chat', params: { id: chat.id } }">{{
          chat.id
        }}</router-link>
      </li>
    </ul>
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
  data() {
    return {
      chats: [],
    };
  },
  firestore() {
    return {
      chats: db.collection("chats").where("owner", "==", this.uid),
    };
  },

  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });
      console.log(newChat);
    },
  },
};
</script>

<style></style>
