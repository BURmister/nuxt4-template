<script setup>
defineProps({
   open: {
      type: Boolean,
      default: false,
   },
   title: {
      type: String,
      default: '',
   },
   maxWidth: {
      type: String,
      default: '520px',
   },
});

const emit = defineEmits(['close']);
</script>

<template>
   <Teleport to="body">
      <Transition name="modal-fade">
         <div v-if="open" class="_Overlay" @click.self="emit('close')">
            <div class="_Dialog card-surface rounded-lg" :style="{ maxWidth }">
               <div class="_Header">
                  <p v-if="title" class="caption-24">{{ title }}</p>
                  <button type="button" class="_Close text-14" @click="emit('close')">Закрыть</button>
               </div>
               <div class="_Content">
                  <slot />
               </div>
            </div>
         </div>
      </Transition>
   </Teleport>
</template>

<style scoped lang="scss">
._Overlay {
   position: fixed;
   inset: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: var(--gap-20);
   background-color: rgba(16, 24, 40, 0.42);
   z-index: 90;
}

._Dialog {
   width: 100%;
   padding: 24px;
}

._Header {
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: var(--gap-16);
   margin-bottom: var(--gap-20);
}

._Close {
   color: var(--text-secondary);
   font-weight: 600;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
   transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
   opacity: 0;
}
</style>

