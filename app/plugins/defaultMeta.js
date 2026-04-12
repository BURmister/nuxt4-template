export default defineNuxtPlugin(() => {
   const config = useRuntimeConfig();
   const siteName = config.public.siteName;
   const siteDescription = config.public.siteDescription;
   const siteUrl = config.public.siteUrl;

   return {
      provide: {
         defaultMeta: {
            title: siteName,
            description: siteDescription,
            ogTitle: siteName,
            ogDescription: siteDescription,
            ogType: 'website',
            ogLocale: 'ru_RU',
            ogSiteName: siteName,
            ogUrl: siteUrl,
         },
      },
   };
});

