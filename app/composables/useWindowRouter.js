export const useGoBack = (url = '/') => {
   const router = useRouter();

   if (import.meta.client && window.history.length > 1) {
      router.back();
      return;
   }

   router.push(url);
};

export const handleGoBack = (url = '/') => {
   const router = useRouter();

   if (import.meta.client && window.history.length > 1) {
      router.back();
      return;
   }

   router.push(url);
};

