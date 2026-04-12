<script setup>
const confirmStore = useConfirm();
</script>

<template>
   <WidgetsModalWrapper
      :open="confirmStore.isOpen"
      :title="confirmStore.payload.title"
      max-width="560px"
      @close="confirmStore.cancel()"
   >
      <div class="_Body">
         <p class="text-16 text-secondary">{{ confirmStore.payload.description }}</p>
         <div class="_Actions">
            <SharedButtonSecondary @click="confirmStore.cancel()">{{ confirmStore.payload.cancelText }}</SharedButtonSecondary>
            <SharedButtonPrimary @click="confirmStore.confirm()">{{ confirmStore.payload.confirmText }}</SharedButtonPrimary>
         </div>
      </div>
   </WidgetsModalWrapper>
</template>

<style scoped lang="scss">
._Body {
   display: grid;
   gap: var(--gap-20);
}

._Actions {
   display: flex;
   flex-wrap: wrap;
   gap: var(--gap-10);
}
</style>

