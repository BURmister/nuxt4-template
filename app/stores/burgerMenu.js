export const useBurgerMenu = defineStore('burgerMenuStore', () => {
   const isOpen = useState('isBurgerOpen', () => false);

   const setOpen = () => {
      isOpen.value = true;
      disableScroll();
   };

   const setClose = () => {
      isOpen.value = false;
      enableScroll();
   };

   const setToggle = () => {
      if (isOpen.value) {
         setClose();
         return;
      }

      setOpen();
   };

   return {
      isOpen,
      setOpen,
      setClose,
      setToggle,
   };
});

