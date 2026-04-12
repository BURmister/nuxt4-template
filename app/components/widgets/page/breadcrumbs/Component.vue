<script setup>
defineProps({
   items: {
      type: Array,
      default: () => [],
   },
});
</script>

<template>
   <div v-if="items.length" class="content-wrapper _Breadcrumbs">
      <SharedActionGoBack />
      <span class="text-14 text-muted">/</span>
      <NuxtLink to="/" class="text-14 text-secondary">Главная</NuxtLink>
      <template v-for="(item, index) in items" :key="`${item.label}-${index}`">
         <span class="text-14 text-muted">/</span>
         <NuxtLink v-if="item.to && index !== items.length - 1" :to="item.to" class="text-14 text-secondary">
            {{ item.label }}
         </NuxtLink>
         <span v-else class="text-14 text-muted">{{ item.label }}</span>
      </template>
   </div>
</template>

<style scoped lang="scss">
._Breadcrumbs {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: var(--gap-8);
}
</style>

