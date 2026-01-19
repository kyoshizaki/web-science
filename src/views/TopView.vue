<script setup>
import { reactive } from 'vue';
const state = reactive({
  notes: []
});
fetch(import.meta.env.VITE_SERVER + '/notes')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  state.notes = data.notes;
});
</script>

<template>
  <RouterLink v-bind:to="{name: 'new'}" tag="button">
    <button>ノートの作成</button>
  </RouterLink>
  <div v-for="note in state.notes">
    <RouterLink v-bind:to="{name: 'note', params: {createdAt: note.createdAt}}">{{note.title}}</RouterLink>
  </div>
</template>

<style>
  button {
    width: 100%;
    margin: 10px 0 10px;
  }
</style>
