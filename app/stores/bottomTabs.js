export const useBottomTabs = defineStore('bottomTabsStore', () => {
   const extraCount = useState('bottomTabsExtraCount', () => 0);

   const registerExtra = () => {
      extraCount.value += 1;
      let disposed = false;

      return () => {
         if (disposed) return;
         disposed = true;
         extraCount.value = Math.max(0, extraCount.value - 1);
      };
   };

   const reset = () => {
      extraCount.value = 0;
   };

   return {
      extraCount,
      registerExtra,
      reset,
   };
});

