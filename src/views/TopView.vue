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
const newNote = reactive({
  title: '',
  body: ''
})
function postNote (){
  fetch('https://qetiqfsbqg.execute-api.us-east-1.amazonaws.com/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({note: {
      title: newNote.title,
      body: newNote.body
    }})
  })
  .then(function() {
    newNote.title = '';
    newNote.body = '';
  })
}

</script>

<template>
  <h2>新規ノート</h2>
  <div>
    <input type="text" name="title" placeholder="タイトル" v-model="newNote.title">
  </div>
  <div>
    <textarea name="body" placeholder="本文" v-model="newNote.body"></textarea>
  </div>
  <button v-on:click="postNote">保存</button>
  <h2>過去のノート</h2>
  <div v-for="note in state.notes">
    <RouterLink v-bind:to="{name: 'note', params: {createdAt: note.createdAt}}">{{note.title}}</RouterLink>
  </div>
</template>

<style scoped>
</style>
