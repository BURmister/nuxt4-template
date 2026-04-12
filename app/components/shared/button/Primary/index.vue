<script setup>
defineProps({
   to: {
      type: [String, Object],
      default: null,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
   type: {
      type: String,
      default: 'button',
   },
});
</script>

<template>
   <NuxtLink v-if="to" :to="to" class="_Button rounded-sm">
      <slot />
   </NuxtLink>
   <button v-else :type="type" :disabled="disabled" class="_Button rounded-sm" :class="{ disabled }">
      <slot />
   </button>
</template>

<style scoped lang="scss">
._Button {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   min-height: var(--ui-height-48);
   padding: 0 18px;
   gap: var(--gap-10);
   background-color: var(--brand-primary);
   color: var(--brand-contrast);
   font-weight: 600;
   transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      opacity 0.2s ease;

   &.disabled {
      opacity: 0.5;
      pointer-events: none;
   }

   @media (pointer: fine) {
      &:hover {
         transform: translateY(-1px);
         background-color: var(--brand-primary-dark);
      }
   }
}
</style>

