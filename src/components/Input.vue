<script setup>
import {reactive} from 'vue';
import {stringifyQuery, useRouter} from 'vue-router';
const router = useRouter();
const props = defineProps({
    url: String,
    method: String,
    title: String,
    body: String
});
const note = reactive({
    title: props.title,
    body: props.body
});
function sendNote (){
  fetch(props.url, {
    method: props.method,
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
    <RouterLink v-bind:to="{name: 'top'}">戻る</RouterLink>
    <div>
      <input type="text" name="title" placeholder="タイトル" v-model="note.title">
    </div>
    <div>
      <textarea name="body" placeholder="本文" v-model="note.body"></textarea>
    </div>
    <button v-on:click="sendNote">保存</button>
</template>

<style scoped>
  input, textarea {
    width: 100%;
    margin-bottom: 5px;
  }
</style>