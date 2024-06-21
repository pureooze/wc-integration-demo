<template>
  <div id="app">
    <h1>WebComponents In Vue</h1>
    <page-block-renderer
        :data="item"
    >
    </page-block-renderer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const item = ref({
  type: "text",
  value: "hello, world!",
  editable: true
});
</script>

<script>
export default {
  name: 'App',
}
</script>

<style>
template {
  background-color: #323741;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
  color: white;
  background-color: #25403f;
}

h1 {
  margin: 0;
  font-size: 2em;
}
</style>