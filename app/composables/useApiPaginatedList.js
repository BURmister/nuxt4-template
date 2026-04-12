import qs from 'qs';

export const useApiPaginatedList = async (apiOptions, { onMeta, getItems, getTotal } = {}) => {
   const route = useRoute();

   const resolvedOptions = {
      ...apiOptions,
      pagination: { limit: 6, page: 1, disabled: false, ...(apiOptions?.pagination || {}) },
      params: { ...(apiOptions?.params || {}) },
   };

   const items = ref([]);
   const loading = ref(false);
   const error = ref(null);
   const meta = ref({});
   const pagination = ref({
      page: Number(route.query?.page) || resolvedOptions.pagination.page || 1,
      limit: Number(route.query?.limit) || resolvedOptions.pagination.limit || 6,
      total: 0,
      totalPages: 1,
   });

   const buildQueryParams = () => {
      const queryParams = {
         ...route.query,
         ...(resolvedOptions.params || {}),
      };

      if (!resolvedOptions.pagination.disabled) {
         queryParams.page = pagination.value.page;
         queryParams.limit = pagination.value.limit;
      }

      return qs.stringify(queryParams, {
         arrayFormat: 'brackets',
         skipNulls: true,
      });
   };

   const applyResponse = (payload) => {
      if (!payload) return;

      const resolvedItems = typeof getItems === 'function' ? getItems(payload) : payload?.data;
      items.value = Array.isArray(resolvedItems) ? resolvedItems : [];

      meta.value = payload?.meta || {};
      const total = typeof getTotal === 'function' ? getTotal(payload) : payload?.meta?.pagination?.total;
      const totalPages = payload?.meta?.pagination?.totalPages;

      pagination.value.total = Number(total || 0);
      pagination.value.totalPages = Number(totalPages || Math.max(1, Math.ceil(pagination.value.total / pagination.value.limit)));

      if (typeof onMeta === 'function') {
         onMeta(meta.value);
      }
   };

   const fetchData = async () => {
      loading.value = true;
      error.value = null;

      try {
         const data = await useApi$fetch(`${resolvedOptions.url}?${buildQueryParams()}`);
         applyResponse(data);
      } catch (err) {
         error.value = err;
      } finally {
         loading.value = false;
      }
   };

   const { data: serverData, error: serverError } = await useApiFetch(`${resolvedOptions.url}?${buildQueryParams()}`, { server: true });
   if (serverError.value) {
      error.value = serverError.value;
   } else {
      applyResponse(serverData.value);
   }

   watch(
      () => route.query,
      () => {
         pagination.value.page = Number(route.query?.page) || 1;
         pagination.value.limit = Number(route.query?.limit) || resolvedOptions.pagination.limit || 6;
         fetchData();
      },
   );

   return {
      items,
      loading,
      error,
      meta,
      pagination,
      fetchData,
      buildQueryParams,
   };
};

