<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { provide, toRef, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import SecondComponent from './components/SecondComponent.vue'

import createI18n from './translations';

const props = defineProps({
  name: {
    type: String,
  },
  locale: {
    type: String
  }
})

watch(() => props.locale, () => {
  console.log("locale = " + props.locale);
  // this.$i18n.locale = val

});

provide("favoriteColor", "pink");
provide("i18n", createI18n);
provide("selectedLocale", toRef(props, 'locale'));
</script>

<template>
  Sprache/Language:
  <select v-model="locale">
    <option>en</option>
    <option>de</option>
  </select>
  <hr />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <hr />
  <SecondComponent :name="name" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
