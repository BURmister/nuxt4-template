import { ARTICLES } from '../../../server/mock/index.js';

export default defineEventHandler((event) => {
   const slug = getRouterParam(event, 'slug');
   const article = ARTICLES.find((item) => item.slug === slug);

   if (!article) {
      throw createError({
         statusCode: 404,
         statusMessage: 'Article not found',
      });
   }

   return {
      data: article,
   };
});

