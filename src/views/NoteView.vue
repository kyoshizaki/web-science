<script setup>
    import { reactive } from 'vue';
    import { useRoute } from 'vue-router';
    const createdAt = useRoute().params.createdAt;
    const note = reactive({ title: '', body: ''});
    fetch('https://qetiqfsbqg.execute-api.us-east-1.amazonaws.com/notes/' + createdAt)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        note.title = data.note.title;
        note.body = data.note.body;
    });
</script>

<template>
  <h1>ノート</h1>
  <RouterLink v-bind:to="{name: 'top'}">戻る</RouterLink>
    <h2>{{ note.title }}</h2>
    <p>{{ note.body }}</p>
</template>
