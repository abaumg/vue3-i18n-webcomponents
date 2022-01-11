<template>
<h1>I'm the second component. My name is <strong>{{ name }}</strong>.</h1>
</template>

<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    default: "Com Ponent II"
  }
})
</script>