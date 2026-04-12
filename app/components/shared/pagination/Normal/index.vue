<script setup>
const props = defineProps({
   page: {
      type: Number,
      default: 1,
   },
   limit: {
      type: Number,
      default: 6,
   },
   total: {
      type: Number,
      default: 0,
   },
});

const route = useRoute();

const totalPages = computed(() => Math.max(1, Math.ceil(props.total / props.limit)));

const pages = computed(() => {
   const allPages = Array.from({ length: totalPages.value }, (_, index) => index + 1);
   return allPages.filter((page) => page === 1 || page === totalPages.value || Math.abs(page - props.page) <= 1);
});

const buildTo = (page) => {
   const query = {
      ...route.query,
      page: page > 1 ? String(page) : undefined,
   };

   return {
      query: Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== '')),
   };
};
</script>

<template>
   <nav v-if="totalPages > 1" class="_Pagination">
      <NuxtLink v-if="page > 1" :to="buildTo(page - 1)" class="_Button rounded-xs">Назад</NuxtLink>
      <NuxtLink
         v-for="pageNumber in pages"
         :key="pageNumber"
         :to="buildTo(pageNumber)"
         class="_Page rounded-xs"
         :class="{ active: pageNumber === page }"
      >
         {{ pageNumber }}
      </NuxtLink>
      <NuxtLink v-if="page < totalPages" :to="buildTo(page + 1)" class="_Button rounded-xs">Вперед</NuxtLink>
   </nav>
</template>

<style scoped lang="scss">
._Pagination {
   display: flex;
   flex-wrap: wrap;
   gap: var(--gap-8);
}

._Button,
._Page {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   min-width: 44px;
   min-height: 44px;
   padding: 0 14px;
   border: 1px solid var(--line);
   background-color: var(--surface);
   color: var(--text-primary);
   transition: all 0.2s ease;

   &.active {
      border-color: var(--brand-primary);
      background-color: var(--brand-primary);
      color: var(--brand-contrast);
   }
}
</style>

