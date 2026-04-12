<script setup>
defineProps({
   caption: {
      type: String,
      default: '',
   },
});
</script>

<template>
   <div class="page-content">
      <h1 v-if="caption" class="visuallyhidden">{{ caption }}</h1>
      <slot />
   </div>
</template>

<style lang="scss">
.page-content {
   display: flex;
   flex-direction: column;
   gap: var(--gap-64);
   padding: var(--gap-48) 0 var(--gap-64);

   &.detail {
      gap: var(--gap-48);
      padding-top: var(--gap-32);
   }
}
</style>

