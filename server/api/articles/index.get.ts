import { ARTICLES } from '../../../server/mock/index.js';

export default defineEventHandler((event) => {
   const query = getQuery(event);
   const page = Math.max(1, Number(query.page || 1));
   const limit = Math.max(1, Number(query.limit || 6));
   const q = String(query.q || '').trim().toLowerCase();

   const filtered = [...ARTICLES]
      .filter((article) => {
         if (!q) return true;
         return [article.title, article.excerpt, article.description, ...(article.tags || [])].join(' ').toLowerCase().includes(q);
      })
      .sort((left, right) => Number(left.sort || 0) - Number(right.sort || 0));

   const total = filtered.length;
   const start = (page - 1) * limit;
   const items = filtered.slice(start, start + limit);

   return {
      data: items,
      meta: {
         pagination: {
            page,
            limit,
            total,
            totalPages: Math.max(1, Math.ceil(total / limit)),
         },
      },
   };
});

