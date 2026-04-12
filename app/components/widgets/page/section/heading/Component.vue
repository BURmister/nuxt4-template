<script setup>
defineProps({
   caption: {
      type: String,
      default: '',
   },
   big: {
      type: Boolean,
      default: false,
   },
});
</script>

<template>
   <div class="content-wrapper _Heading">
      <h2 v-if="caption" :class="big ? 'caption-40' : 'caption-32'">{{ caption }}</h2>
      <slot />
   </div>
</template>

<style scoped lang="scss">
._Heading {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: var(--gap-20);

   @media (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
   }
}
</style>

