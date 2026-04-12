<script setup>
defineProps({
   items: {
      type: Array,
      default: () => [],
   },
});
</script>

<template>
   <div v-if="items.length" class="content-wrapper _Grid">
      <SharedCardArticleNormal v-for="article in items" :key="article.id" :article="article" />
   </div>
   <SharedEmptyTemplate
      v-else
      class="content-wrapper"
      title="Материалы пока не найдены"
      description="Здесь появится список статей после подключения реального контента."
   />
</template>

<style scoped lang="scss">
._Grid {
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   gap: var(--gap-20);

   @media (max-width: 1199px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }

   @media (max-width: 767px) {
      grid-template-columns: 1fr;
   }
}
</style>

