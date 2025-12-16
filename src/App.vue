<script setup>
import { reactive } from 'vue';
  const state = reactive({count: 0});
  function increment() {
    state.count ++;
  }
  const tmp1 = "Hello <span style='color: red;'>World!</span>";
  const tmp2 = 10;
</script>

<template>
  <h1>Lesson 10</h1>
  <p>{{tmp1+" from vue.js"}}</p>
  <p v-text="tmp1" ></p>
  <p v-html="tmp1" ></p>
  <p>{{tmp2+10}}</p>

  <button @click="increment">カウント</button>
  <p>{{ state.count }}</p>
</template>

<style scoped>
</style>
