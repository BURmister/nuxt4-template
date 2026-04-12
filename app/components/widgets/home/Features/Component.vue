<script setup>
defineProps({
   data: {
      type: Array,
      default: () => [],
   },
});
</script>

<template>
   <WidgetsPageSectionComponent>
      <WidgetsPageSectionHeadingComponent caption="Что стоит переносить между проектами">
         <WidgetsPageSectionHeadingLine />
      </WidgetsPageSectionHeadingComponent>

      <div class="content-wrapper _Grid">
         <article v-for="item in data" :key="item.title" class="_Card card-surface rounded-lg">
            <p class="caption-24">{{ item.title }}</p>
            <p class="text-16 text-secondary">{{ item.description }}</p>
         </article>
      </div>
   </WidgetsPageSectionComponent>
</template>

<style scoped lang="scss">
._Grid {
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   gap: var(--gap-20);

   ._Card {
      display: grid;
      gap: var(--gap-12);
      padding: 24px;
   }

   @media (max-width: 991px) {
      grid-template-columns: 1fr;
   }
}
</style>

