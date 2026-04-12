<script setup>
import { BOTTOM_TABS } from '@config/db/navigation';

const bottomTabsStore = useBottomTabs();
const hasExtraContent = computed(() => bottomTabsStore.extraCount > 0);
</script>

<template>
   <div class="_BottomTabs-Wrapper" :style="{ '--bottomtabs-extra-height': hasExtraContent ? '56px' : '0px' }">
      <div class="_BottomTabs">
         <div id="app-bottomtabs-extra" class="_Extra" :class="{ 'has-content': hasExtraContent }"></div>
         <div class="_Tabs">
            <NuxtLink v-for="tab in BOTTOM_TABS" :key="tab.to" :to="tab.to" class="_Tab text-12">
               {{ tab.label }}
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
._BottomTabs-Wrapper {
   display: none;

   @media (max-width: 991px) {
      display: block;
      height: calc(var(--bottomtabs-height) + var(--bottomtabs-extra-height, 0px));
   }

   ._BottomTabs {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 50;
      background-color: var(--surface);
      box-shadow: 0 -18px 40px rgba(24, 43, 112, 0.12);
   }

   ._Extra {
      height: 0;
      overflow: hidden;
      border-top: 1px solid transparent;
      transition: all 0.2s ease;

      &.has-content {
         height: var(--bottomtabs-extra-height, 56px);
         border-top-color: var(--line);
      }
   }

   ._Tabs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      min-height: var(--bottomtabs-height);
   }

   ._Tab {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      color: var(--text-secondary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;

      &.router-link-active {
         color: var(--brand-primary);
      }
   }
}
</style>

