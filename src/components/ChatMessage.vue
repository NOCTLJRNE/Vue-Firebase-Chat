<template>
  <div class="message" :class="{ ownedMessage: owned }">
    {{ message.text }}
    <br />
    <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
    <span class="sender"> sent by {{ message.sender }} </span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      required: true,
    },
    owned: {
      required: true,
    },
  },
};
</script>

<style scoped>
/* .message {
  background: #dddddd;
  color: black;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;

}
.ownedMessage {
  margin-right: auto;
  margin-left: 10px;
  background: #91bbff;
} */
.message {
  background: #dddddd;
  color: black;
  /* margin-left: auto; */
  /* margin-right: 10px; */
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
  box-shadow: 0.4em 0.4em 0.75em gray;
}
.ownedMessage {
  /* margin-right: auto;
  margin-left: 10px; */
  background: #91bbff;
}
.sender {
  font-size: 0.5rem;
}
</style>
