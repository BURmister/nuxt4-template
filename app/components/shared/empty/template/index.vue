<script setup>
defineProps({
   title: {
      type: String,
      default: 'Пока пусто',
   },
   description: {
      type: String,
      default: 'Здесь появится контент после подключения реальных данных.',
   },
   buttonTitle: {
      type: String,
      default: 'Вернуться назад',
   },
});
</script>

<template>
   <div class="_Empty card-surface rounded-lg">
      <p class="caption-24">{{ title }}</p>
      <p class="text-16 text-secondary">{{ description }}</p>
      <SharedActionGoBack>{{ buttonTitle }}</SharedActionGoBack>
   </div>
</template>

<style scoped lang="scss">
._Empty {
   display: grid;
   gap: var(--gap-16);
   padding: 24px;
}
</style>

