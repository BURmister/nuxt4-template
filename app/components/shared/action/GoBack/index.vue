<script setup>
const props = defineProps({
   fallback: {
      type: String,
      default: '/',
   },
});

const handleClick = () => {
   handleGoBack(props.fallback);
};
</script>

<template>
   <button type="button" class="_Action text-14" @click="handleClick">
      <slot>Вернуться назад</slot>
   </button>
</template>

<style scoped lang="scss">
._Action {
   color: var(--brand-primary);
   font-weight: 600;
   transition: opacity 0.2s ease;

   @media (pointer: fine) {
      &:hover {
         opacity: 0.7;
      }
   }
}
</style>

