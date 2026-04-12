export const useIsMobile = () => {
   if (!import.meta.client) return false;
   return window.innerWidth < 992;
};

export const useViewportWidth = () => {
   const width = ref(import.meta.client ? window.innerWidth : 0);

   const syncWidth = () => {
      if (!import.meta.client) return;
      width.value = window.innerWidth;
   };

   onMounted(() => {
      syncWidth();
      window.addEventListener('resize', syncWidth, { passive: true });
   });

   onBeforeUnmount(() => {
      if (!import.meta.client) return;
      window.removeEventListener('resize', syncWidth);
   });

   return {
      width,
      isMobile: computed(() => width.value < 992),
   };
};

