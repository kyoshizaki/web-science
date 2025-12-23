<script setup>
import { reactive } from 'vue';
const state = reactive({
  notes: []
});
fetch('https://qetiqfsbqg.execute-api.us-east-1.amazonaws.com/notes')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  state.notes = data.notes;
});
</script>

<template>
  <h2>新規ノート</h2>
  <h2>過去のノート</h2>
  <div v-for="note in state.notes">
    <RouterLink v-bind:to="{name: 'note'}">{{note.title}}</RouterLink>
  </div>
</template>

<style scoped>
</style>
