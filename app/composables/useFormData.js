export const objectToFormData = (object = {}) => {
   const formData = new FormData();

   Object.entries(object).forEach(([key, value]) => {
      if (value == null) return;

      if (Array.isArray(value)) {
         value.forEach((item) => {
            if (item != null) formData.append(`${key}[]`, item);
         });
         return;
      }

      formData.append(key, value);
   });

   return formData;
};

