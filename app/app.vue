<script setup>
import '@config/styles/global.scss';

const { $defaultMeta } = useNuxtApp();
useSeoMeta({ ...$defaultMeta });
</script>

<template>
   <div class="page-container">
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator color="var(--brand-primary)" />
      <WidgetsAppHeaderComponent />
      <main class="relative flex flex-col">
         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
      </main>
      <WidgetsAppFooterComponent />
      <WidgetsAppBottomTabsComponent />
      <WidgetsModalProvider />
   </div>
</template>

