<template>
  <div id="app">
    <header>
      <h1>Vue FireBase Chat App</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style></style>
