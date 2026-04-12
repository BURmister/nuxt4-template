<script setup>
const { items, pagination } = await useApiPaginatedList({
   url: '/articles',
   pagination: {
      limit: 6,
   },
});

const totalLabel = computed(() => usePluralize(pagination.value.total, ['материал', 'материала', 'материалов']));

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: 'Материалы | Nuxt 4 Template',
   ogTitle: 'Материалы | Nuxt 4 Template',
});
</script>

<template>
   <WidgetsPageLayoutComponent class="detail" caption="Материалы">
      <WidgetsPageSectionComponent>
         <WidgetsPageBreadcrumbsComponent :items="[{ label: 'Материалы' }]" />
         <div class="content-wrapper _Heading">
            <div class="_Heading-Content">
               <h2 class="caption-40">Материалы</h2>
               <p class="text-16 text-secondary">
                  {{ pagination.total }} {{ totalLabel }}. Страница подключена к `useApiPaginatedList`, поэтому query-driven список можно быстро
                  адаптировать под каталог, блог или новости.
               </p>
            </div>
         </div>
      </WidgetsPageSectionComponent>

      <WidgetsPageSectionComponent>
         <WidgetsArticlesListComponent :items="items" />
         <div class="content-wrapper">
            <SharedPaginationNormal :page="pagination.page" :limit="pagination.limit" :total="pagination.total" />
         </div>
      </WidgetsPageSectionComponent>
   </WidgetsPageLayoutComponent>
</template>

<style scoped lang="scss">
._Heading {
   ._Heading-Content {
      display: grid;
      gap: var(--gap-12);
      max-width: 760px;
   }
}
</style>

