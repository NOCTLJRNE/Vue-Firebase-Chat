<template>
  <main class="section">
    <h2>Welcome to Chat Room {{ chatRoomID }}</h2>
    <router-link to="/">Back</router-link>
    <User v-slot:user="{ userProp }">
      <ul>
        <li v-for="message of messages" :key="message.id">
          {{ message.text }}
        </li>
      </ul>
      <input
        type="text"
        v-model="newTextMessage"
        placeholder="Say something :D"
        class="input"
      />
      <button
        class="button is-success"
        v-bind:disabled="!newTextMessage || loading"
        v-on:click="sendMessage(userProp.uid)"
      >
        Send
      </button>
    </User>
  </main>
</template>

<script>
import User from "./User.vue";
import { db } from "../firebase";
export default {
  components: {
    User,
  },
  data() {
    return {
      messages: [],
      newTextMessage: "",
      loading: false,
    };
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt").limitToLast(10),
    };
  },
  methods: {
    async sendMessage(uid) {
      this.loading = true;
      const { id: messageID } = this.messagesCollection.doc();
      await this.messagesCollection.doc(messageID).set({
        createdAt: Date.now(),
        sender: uid,
        text: this.newTextMessage,
      });
      this.loading = false;
      this.newTextMessage = "";
    },
  },
  computed: {
    chatRoomID() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db
        .collection("chats")
        .doc(`${this.chatRoomID}`)
        .collection("messages");
    },
  },
};
</script>

<style></style>
