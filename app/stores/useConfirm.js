export const useConfirm = defineStore('confirm', () => {
   const isOpen = useState('confirmOpen', () => false);
   const payload = useState('confirmPayload', () => ({
      title: 'Подтверждение',
      description: '',
      confirmText: 'Подтвердить',
      cancelText: 'Отмена',
   }));

   let resolver = null;

   const close = () => {
      isOpen.value = false;
      enableScroll();
   };

   const open = (options = {}) => {
      if (resolver) {
         resolver(false);
         resolver = null;
      }

      payload.value = {
         title: 'Подтверждение',
         description: '',
         confirmText: 'Подтвердить',
         cancelText: 'Отмена',
         ...(options || {}),
      };

      isOpen.value = true;
      disableScroll();

      return new Promise((resolve) => {
         resolver = resolve;
      });
   };

   const confirm = () => {
      if (resolver) resolver(true);
      resolver = null;
      close();
   };

   const cancel = () => {
      if (resolver) resolver(false);
      resolver = null;
      close();
   };

   return {
      isOpen,
      payload,
      open,
      close,
      confirm,
      cancel,
   };
});

