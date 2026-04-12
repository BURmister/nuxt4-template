const getApiBase = () => useRuntimeConfig().public.apiPrefix || '/api';

export const useApiFetch = async (url, options = {}) => {
   return useFetch(url, {
      baseURL: getApiBase(),
      deep: false,
      ...options,
   });
};

export const useApiAuthFetch = async (url, options = {}) => {
   return useApiFetch(url, options);
};

export const useApi$fetch = async (url, options = {}) => {
   return $fetch(url, {
      baseURL: getApiBase(),
      ...options,
   });
};

export const useApiAuth$fetch = async (url, options = {}) => {
   return useApi$fetch(url, options);
};

