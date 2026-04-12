import { CONTACTS_PAGE } from '../../../server/mock/index.js';

export default defineEventHandler(() => {
   return {
      data: CONTACTS_PAGE,
   };
});

