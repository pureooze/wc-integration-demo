<template>
  <div id="app">
    <header class="vue-header">
      <h1 class="vue-h1">WebComponents In Vue</h1>
    </header>
    <h2>Compact Mode</h2>
    <ul className="vue-list">
      <li v-for="item in items" class="draggable-item">
          <svg width="50" height="50" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="1" fill="#323741"/>
            <circle cx="10" cy="5" r="1" fill="#323741"/>
            <circle cx="5" cy="10" r="1" fill="#323741"/>
            <circle cx="10" cy="10" r="1" fill="#323741"/>
            <circle cx="5" cy="15" r="1" fill="#323741"/>
            <circle cx="10" cy="15" r="1" fill="#323741"/>
          </svg>
          <div class="compact-block">
            <page-block-renderer :data="item"></page-block-renderer>
          </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    type: "text",
    value: "hello, world!",
    editable: false,
    compact: true
  },
  {
    type: "youtube",
    value: "https://www.youtube.com/embed/1EL6L2dh5pY",
    editable: false,
    compact: true
  }
]);
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
  text-align: center;
  height: 100vh;
  color: white;
  background-color: #22262c;
  overflow-y: auto;
}

.vue-header {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #25403f;
}

.vue-list {
  padding: 1em 0;
  list-style-type: none;
}

.draggable-item {
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
}

.compact-block {
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-corner {
  background: #999;
}
</style>