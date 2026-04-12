<script setup>
const content = `
   <p>Эта страница показывает базовый паттерн контентной страницы: breadcrumbs, заголовок, HTML-контент и SEO-секцию.</p>
   <p>Обычно именно такие страницы появляются в проекте первыми: about, delivery, terms, return policy, brand story.</p>
   <h2>Что можно сделать дальше</h2>
   <ul>
      <li>подключить реальный API вместо локального <strong>server/api</strong></li>
      <li>заменить демо-навигацию и тексты на проектные</li>
      <li>обновить цветовые токены, типографику и размеры wrapper</li>
   </ul>
`;

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: 'О проекте | Nuxt 4 Template',
   ogTitle: 'О проекте | Nuxt 4 Template',
});
</script>

<template>
   <WidgetsPageLayoutComponent class="detail" caption="О проекте">
      <WidgetsPageSectionComponent>
         <WidgetsPageBreadcrumbsComponent :items="[{ label: 'О проекте' }]" />
         <WidgetsPageSectionHeadingComponent caption="О проекте" big />
      </WidgetsPageSectionComponent>

      <WidgetsPageSectionComponent>
         <SharedContentHTML class="content-wrapper" :data="content" />
      </WidgetsPageSectionComponent>

      <WidgetsPageSeoSectionComponent
         :data="{
            title: 'Зачем эта страница нужна в шаблоне',
            description: '<p>Она остается как образец обычной контентной страницы. Ее легко переименовать под delivery, terms, help или любую другую статичную секцию.</p>',
         }"
      />
   </WidgetsPageLayoutComponent>
</template>

