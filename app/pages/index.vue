<script setup>
import { FEATURE_ITEMS } from '@config/db/navigation';

const { data } = await useApiFetch('/pages/home');
const page = computed(() => data.value?.data || {});

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: 'Nuxt 4 Template | Стартовый проект',
   ogTitle: 'Nuxt 4 Template | Стартовый проект',
});
</script>

<template>
   <WidgetsPageLayoutComponent caption="Nuxt 4 Template">
      <WidgetsHomeHeroComponent :data="page.hero" />
      <WidgetsHomeFeaturesComponent :data="FEATURE_ITEMS" />
      <WidgetsPageSeoSectionComponent :data="page.seo" />
   </WidgetsPageLayoutComponent>
</template>

