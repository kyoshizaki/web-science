<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Input from '../components/Input.vue';
const router = useRouter();
const createdAt = useRoute().params.createdAt;
const createdAtText = new Date(Number(createdAt));
const url = import.meta.env.VITE_SERVER + '/notes/' + createdAt;
const state = reactive({edit: false, editable: false});
const note = reactive({ title: '', body: ''});
fetch(import.meta.env.VITE_SERVER + '/notes/' + createdAt)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    state.editable = true;
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
function changeMode () {
  state.edit = !state.edit
}
</script>

<template>
    <div v-if="!state.edit">
        <RouterLink v-bind:to="{name: 'top'}">戻る</RouterLink>
        <h2>{{ note.title }}</h2>
        <div id="createdAt">{{ createdAtText }}</div>
        <p>{{ note.body }}</p>
        <button v-if="state.editable" v-on:click="changeMode">編集</button>
        <button v-on:click="deleteNote">削除</button>
    </div>
    <div v-if="state.edit">
        <Input
        v-bind:url=url
        method="PATCH"
        v-bind:title=note.title
        v-bind:body=note.body />
        <button v-on:click="changeMode">キャンセル</button>
    </div>
</template>

<style scoped>
    #createdAt {
        font-size: small;
        text-align: right;
        margin-bottom: 10px;
    }
</style>