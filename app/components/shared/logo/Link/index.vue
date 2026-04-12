<script setup>
const { public: publicConfig } = useRuntimeConfig();
</script>

<template>
   <NuxtLink to="/" class="_Logo">
      <span class="_Mark">N4</span>
      <span class="_Text">{{ publicConfig.siteName }}</span>
   </NuxtLink>
</template>

<style scoped lang="scss">
._Logo {
   display: inline-flex;
   align-items: center;
   gap: var(--gap-10);
   color: var(--text-primary);

   ._Mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--brand-primary) 0%, #5a87ff 100%);
      color: var(--brand-contrast);
      font-weight: 800;
      letter-spacing: 0.04em;
   }

   ._Text {
      font-size: 16px;
      font-weight: 700;
   }
}
</style>

