<script setup>
const route = useRoute();
const shareState = ref('');

const { data, error } = await useApiFetch(`/articles/${route.params.slug}`);
if (error.value) {
   throw error.value;
}

const article = computed(() => data.value?.data);
if (!article.value) {
   throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
   });
}

const shareTool = useShare({
   title: article.value.title,
});

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: `${article.value.title} | Nuxt 4 Template`,
   ogTitle: `${article.value.title} | Nuxt 4 Template`,
   description: article.value.description,
   ogDescription: article.value.description,
});

const handleShare = async () => {
   const result = await shareTool.share();
   if (!result.success) {
      shareState.value = 'Не получилось поделиться ссылкой.';
      return;
   }

   shareState.value = result.method === 'clipboard' ? 'Ссылка скопирована в буфер.' : 'Окно шаринга открыто.';
};
</script>

<template>
   <WidgetsPageLayoutComponent class="detail" :caption="article.title">
      <WidgetsPageSectionComponent>
         <WidgetsPageBreadcrumbsComponent
            :items="[
               { label: 'Материалы', to: '/articles' },
               { label: article.title },
            ]"
         />

         <div class="content-wrapper _Hero">
            <div class="_Meta">
               <span class="text-12 text-muted">{{ useFormatDate(article.publishedAt) }}</span>
               <span class="text-12 text-brand">{{ article.tags?.join(' / ') }}</span>
            </div>
            <h2 class="caption-40">{{ article.title }}</h2>
            <p class="text-18 text-secondary">{{ article.description }}</p>
            <div class="_Actions">
               <SharedButtonSecondary @click="handleShare">Поделиться ссылкой</SharedButtonSecondary>
               <p v-if="shareState" class="text-14 text-secondary">{{ shareState }}</p>
            </div>
         </div>
      </WidgetsPageSectionComponent>

      <WidgetsPageSectionComponent>
         <SharedContentHTML class="content-wrapper" :data="article.body" />
      </WidgetsPageSectionComponent>
   </WidgetsPageLayoutComponent>
</template>

<style scoped lang="scss">
._Hero {
   display: grid;
   gap: var(--gap-16);
   max-width: 860px;
}

._Meta,
._Actions {
   display: flex;
   flex-wrap: wrap;
   gap: var(--gap-10);
   align-items: center;
}
</style>

