<script setup>
defineProps({
   items: {
      type: Array,
      default: () => [],
   },
});
</script>

<template>
   <div class="content-wrapper _Grid">
      <article v-for="item in items" :key="item.title" class="_Card card-surface rounded-lg">
         <p class="text-14 text-muted">{{ item.title }}</p>
         <a :href="getHref(item.value)" class="caption-24">{{ item.value }}</a>
         <p class="text-16 text-secondary">{{ item.note }}</p>
      </article>
   </div>
</template>

<style scoped lang="scss">
._Grid {
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   gap: var(--gap-20);

   ._Card {
      display: grid;
      align-content: start;
      gap: var(--gap-12);
      padding: 24px;
   }

   @media (max-width: 991px) {
      grid-template-columns: 1fr;
   }
}
</style>

