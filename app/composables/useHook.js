export function getHref(value) {
   if (!value) return '';

   if (String(value).startsWith('+7')) return `tel:${value}`;
   if (String(value).includes('@')) return `mailto:${value}`;
   return String(value).startsWith('http') ? value : `https://${value}`;
}

export function formatPrice(value) {
   return new Intl.NumberFormat('ru-RU').format(Number(value || 0));
}

export function formatPhone(value) {
   if (!value) return '';
   return String(value);
}

