<script setup>
const props = defineProps({
   article: {
      type: Object,
      required: true,
   },
});

const articleUrl = computed(() => `/articles/${props.article.slug}`);
</script>

<template>
   <article class="_Card card-surface rounded-lg">
      <div class="_Meta">
         <span class="text-12 text-muted">{{ useFormatDate(article.publishedAt) }}</span>
         <span v-if="article.tags?.length" class="text-12 text-brand">{{ article.tags.join(' / ') }}</span>
      </div>
      <NuxtLink :to="articleUrl" class="_Title caption-24">{{ article.title }}</NuxtLink>
      <p class="_Excerpt text-16 text-secondary">{{ article.excerpt }}</p>
      <NuxtLink :to="articleUrl" class="_Link text-14">Открыть материал</NuxtLink>
   </article>
</template>

<style scoped lang="scss">
._Card {
   display: grid;
   gap: var(--gap-16);
   height: 100%;
   padding: 24px;

   ._Meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--gap-10);
   }

   ._Title {
      color: var(--text-primary);
      transition: color 0.2s ease;
   }

   ._Excerpt {
      flex: 1;
   }

   ._Link {
      color: var(--brand-primary);
      font-weight: 600;
   }

   @media (pointer: fine) {
      &:hover {
         ._Title {
            color: var(--brand-primary);
         }
      }
   }
}
</style>

