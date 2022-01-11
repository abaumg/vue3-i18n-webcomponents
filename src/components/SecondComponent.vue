<template>
<h1>
    {{ t('imTheSecond') }}
    {{ t('myNameIs', { name: name, color: color }) }}
    </h1>
<p v-if="locale">The selected locale is <em>{{ locale }}</em>.</p>
<p v-else><em style="color:red">No locale was selected.</em></p>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  name: {
    type: String,
    default: "Com Ponent II"
  }
})

const color = inject("favoriteColor");
const locale = inject("selectedLocale");
</script>