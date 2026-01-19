<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const createdAt = useRoute().params.createdAt;
const createdAtText = new Date(Number(createdAt));
const note = reactive({ title: '', body: ''});
fetch(import.meta.env.VITE_SERVER + '/notes/' + createdAt)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    note.title = data.note.title;
    note.body = data.note.body;
});
function deleteNote () {
    fetch(import.meta.env.VITE_SERVER + '/notes/' + createdAt, {
        method: 'DELETE',
    })
    .then(function() {
        router.push({name: 'top'});
    });
}
</script>

<template>
  <RouterLink v-bind:to="{name: 'top'}">戻る</RouterLink>
    <h2>{{ note.title }}</h2>
    <div id="createdAt">{{ createdAtText }}</div>
    <p>{{ note.body }}</p>
    <button v-on:click="deleteNote">削除</button>
</template>

<style scoped>
    #createdAt {
        font-size: small;
        text-align: right;
        margin-bottom: 10px;
    }
</style>