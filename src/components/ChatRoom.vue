<template>
  <main class="section">
    <h2>Welcome to Chat Room {{ chatRoomID }}</h2>
    <router-link to="/">Back</router-link>
    <User v-slot:user="{ userProp }">
      <ul>
        <li
          v-bind:class="[userProp.uid === message.sender ? 'mine' : 'yours']"
          v-for="message of messages"
          :key="message.id"
        >
          <ChatMessage
            :message="message"
            :owned="userProp.uid === message.sender"
          />
        </li>
      </ul>
      <input
        type="text"
        v-model="newTextMessage"
        placeholder="Say something :D"
        class="input"
        v-on:keyup.enter="sendMessage(userProp.uid)"
      />
      <hr />
      <h5>Record Audio</h5>
      <button v-if="!recorder" v-on:click="record">Record</button>
      <button v-else v-on:click="stop">Stop</button>
      <br />
      <audio v-if="newAudio" :src="newAudioURL" controls></audio>
      <hr />
      <button
        class="button is-success"
        v-bind:disabled="(!newTextMessage && !newAudio) || loading"
        v-on:click="sendMessage(userProp.uid)"
      >
        Send
      </button>
    </User>
  </main>
</template>

<script>
import User from "./User.vue";
import ChatMessage from "./ChatMessage.vue";
import { db, storage } from "../firebase";
export default {
  components: {
    User,
    ChatMessage,
  },
  data() {
    return {
      messages: [],
      newTextMessage: "",
      loading: false,
      newAudio: null, // new audio message (BLOB)
      recorder: null, // recorder instance
    };
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt").limitToLast(10),
      //   https://firebase.google.com/docs/database/rest/retrieve-data?hl=vi
    };
  },
  methods: {
    async sendMessage(uid) {
      if (this.newTextMessage || this.newAudio) {
        let audioURL = null;
        this.loading = true;

        const { id: messageID } = this.messagesCollection.doc();

        if (this.newAudio) {
          // Create a root reference
          var storageRef = storage.ref("chats");

          // Create a reference to 'mountains.jpg'

          var fileRef = storageRef
            .child(this.chatRoomID)
            .child(`${messageID}.wav`);
          await fileRef.put(this.newAudio);
          this.newAudio = null;
          audioURL = await fileRef.getDownloadURL();
        }

        await this.messagesCollection.doc(messageID).set({
          // await this.messagesCollection.add({
          createdAt: Date.now(),
          sender: uid,
          text: this.newTextMessage,
          audioURL,
        });
      }
      this.loading = false;
      this.newTextMessage = "";
    },
    async record() {
      let vm = this;
      this.recorder = null;
      // access to user media https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      let stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      // instantiate new recodrder
      this.recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      // register event listener dataavailable & stop https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable
      var chunks = [];

      //   this.recorder.onstop = function(e) {
      //     vm.newAudio = new Blob(chunks);
      //   };
      this.recorder.onstop = (e) => {
        this.newAudio = new Blob(chunks);
      };

      this.recorder.ondataavailable = function(e) {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      // start the recording
      this.recorder.start();
    },
    async stop() {
      this.recorder.stop();
      this.recorder = null;
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
    newAudioURL() {
      return URL.createObjectURL(this.newAudio);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background: #efefef;
  padding: 10px;
  border-radius: 0;
}
li {
  display: flex;
}
.mine {
  display: flex;
  justify-content: flex-start;
}
.yours {
  display: flex;
  justify-content: flex-end;
}
</style>
