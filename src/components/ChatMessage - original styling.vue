<template>
  <div class="message" :class="{ ownedMessage: owned }">
    {{ message.text }}
    <br />
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
.message {
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
}
/* .message {
  background: #dddddd;
  color: black;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
}
.ownedMessage {
  background: #91bbff;
} */
.sender {
  font-size: 0.5rem;
}
</style>
