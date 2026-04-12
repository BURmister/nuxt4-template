export function useShare(payload = {}) {
   const route = useRoute();
   const config = useRuntimeConfig();
   const isClient = import.meta.client;
   const canShare = isClient && typeof navigator !== 'undefined' && typeof navigator.share === 'function';

   const getUrl = () => {
      if (payload.url) return payload.url;
      if (isClient) return window.location.href;
      return `${config.public.siteUrl}${route.fullPath}`;
   };

   const getTitle = () => {
      if (payload.title) return payload.title;
      if (isClient) return document.title || config.public.siteName;
      return config.public.siteName;
   };

   const share = async () => {
      if (!isClient) return { success: false };

      const data = {
         title: getTitle(),
         text: payload.text || '',
         url: getUrl(),
      };

      if (canShare) {
         await navigator.share(data);
         return { success: true, method: 'native' };
      }

      try {
         await navigator.clipboard.writeText(data.url);
         return { success: true, method: 'clipboard' };
      } catch {
         return { success: false, method: 'clipboard' };
      }
   };

   return {
      share,
      canShare,
   };
}

