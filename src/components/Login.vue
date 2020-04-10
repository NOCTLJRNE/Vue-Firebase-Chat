<template>
  <aside>
    <h3>Sign In Anonymously</h3>
    <button v-on:click="auth.signInAnonymously()">Sign In</button>
    <br />
    <h3>{{ newUser ? "Sign up new account" : "Sign in with E-mail" }}</h3>
    <a href="#" v-on:click="newUser = !newUser">{{
      newUser ? "Returning user ?" : "New user ?"
    }}</a>
    <br />
    <label for="email">E-mail</label>
    <input type="email" v-model="email" class="input" placeholder="email" />
    <label for="password">Password</label>
    <input type="password" v-model="password" class="input" />
    <button
      class="button is-info"
      v-bind:class="{ 'is-loading': loading }"
      v-on:click="signInOrCreateUser"
    >
      {{ newUser ? "Sign Up" : "Sign In" }}
    </button>
    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from "../firebase";
export default {
  data() {
    return {
      auth: auth,
      newUser: false,
      email: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error;
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
