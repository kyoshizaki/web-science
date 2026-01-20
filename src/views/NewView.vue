<script setup>
  import Input from '../components/Input.vue';
  const url = import.meta.env.VITE_SERVER + '/notes';
</script>

<template>
  <h2>新規ノート</h2>
  <Input v-bind:url=url method="POST" title="" body="" />
</template>
