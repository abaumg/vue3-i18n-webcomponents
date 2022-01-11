<template>
<h1>I'm the second component. My name is <strong>{{ name }}</strong> and my favorite color is {{ color }}.</h1>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: "Com Ponent II"
  }
})

const color = inject("favoriteColor");
</script>