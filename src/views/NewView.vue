<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const note = reactive({
  title: '',
  body: ''
})
function postNote (){
  fetch(import.meta.env.VITE_SERVER + '/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({note: {
      title: note.title,
      body: note.body
    }})
  })
  .then(function() {
    router.push({name: 'top'});
})
}
</script>

<template>
  <h2>新規ノート</h2>
  <RouterLink v-bind:to="{name: 'top'}">戻る</RouterLink>
  <div>
    <input type="text" name="title" placeholder="タイトル" v-model="note.title">
  </div>
  <div>
    <textarea name="body" placeholder="本文" v-model="note.body"></textarea>
  </div>
  <button v-on:click="postNote">保存</button>
</template>

<style scoped>
    input, textarea {
        width: 100%;
        margin-bottom: 5px;
    }
</style>