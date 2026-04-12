export const useFormatDate = (dateString, locale = 'ru-RU') => {
   const date = new Date(dateString);
   if (Number.isNaN(date.getTime())) return '';

   return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   }).format(date);
};

export const useGetTime = (timerTime) => {
   const total = Math.max(0, Number(timerTime || 0));
   const days = String(Math.floor(total / (1000 * 60 * 60 * 24))).padStart(2, '0');
   const hours = String(Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
   const minutes = String(Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
   const seconds = String(Math.floor((total % (1000 * 60)) / 1000)).padStart(2, '0');

   return `${days}:${hours}:${minutes}:${seconds}`;
};

