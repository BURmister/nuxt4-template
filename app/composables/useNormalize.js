export const hasOwn = (obj, key) => Boolean(obj && Object.prototype.hasOwnProperty.call(obj, key));
export const hasAnyOwn = (obj, keys = []) => keys.some((key) => hasOwn(obj, key));

export const parseBool = (value, fallback = false) => {
   if (value == null) return fallback;
   if (typeof value === 'boolean') return value;
   if (typeof value === 'number') return value > 0;

   const normalized = String(value).trim().toLowerCase();
   if (['y', 'yes', 'true', '1'].includes(normalized)) return true;
   if (['n', 'no', 'false', '0'].includes(normalized)) return false;
   return fallback;
};

export const bySort = (left, right) => {
   const leftValue = Number(left?.SORT ?? left?.sort ?? 0);
   const rightValue = Number(right?.SORT ?? right?.sort ?? 0);
   return leftValue - rightValue;
};

export const toList = (value) => {
   if (!Array.isArray(value)) return [];
   return [...value].filter((item) => item?.ACTIVE !== 'N' && item?.active !== false).sort(bySort);
};

export const toStringOrNull = (value) => {
   if (value == null || value === '') return null;
   return String(value);
};

export const toNumericOrNull = (value) => {
   const parsed = Number(value);
   return Number.isFinite(parsed) ? parsed : null;
};

export const slugify = (value) => {
   return String(value || '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9а-яё\s-]/gi, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
};

