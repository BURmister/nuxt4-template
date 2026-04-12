<script setup>
const bottomTabsStore = useBottomTabs();
let disposeExtra = null;

onMounted(() => {
   disposeExtra = bottomTabsStore.registerExtra();
});

onBeforeUnmount(() => {
   disposeExtra?.();
});
</script>

<template>
   <Teleport to="#app-bottomtabs-extra">
      <div class="_BottomTabsExtra">
         <slot />
      </div>
   </Teleport>
</template>

<style scoped lang="scss">
._BottomTabsExtra {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   padding: 0 var(--wrapper-horizontal-padding);
}
</style>

