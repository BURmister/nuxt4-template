<script setup>
const { data } = await useApiFetch('/contacts');
const page = computed(() => data.value?.data || {});

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: 'Контакты | Nuxt 4 Template',
   ogTitle: 'Контакты | Nuxt 4 Template',
});
</script>

<template>
   <WidgetsPageLayoutComponent class="detail" caption="Контакты">
      <WidgetsPageSectionComponent>
         <WidgetsPageBreadcrumbsComponent :items="[{ label: 'Контакты' }]" />
         <div class="content-wrapper _Heading">
            <h2 class="caption-40">{{ page.title }}</h2>
            <p class="text-16 text-secondary">{{ page.description }}</p>
         </div>
      </WidgetsPageSectionComponent>

      <WidgetsPageSectionComponent>
         <WidgetsContactsBlockComponent :items="page.items" />
      </WidgetsPageSectionComponent>
   </WidgetsPageLayoutComponent>
</template>

<style scoped lang="scss">
._Heading {
   display: grid;
   gap: var(--gap-12);
   max-width: 760px;
}
</style>

