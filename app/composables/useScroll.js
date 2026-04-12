export const disableScroll = () => {
   if (!import.meta.client) return;
   document.documentElement.style.overflow = 'hidden';
};

export const enableScroll = () => {
   if (!import.meta.client) return;
   document.documentElement.style.overflow = '';
};

