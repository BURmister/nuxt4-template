export function usePluralize(count, forms) {
   if (!Array.isArray(forms) || forms.length !== 3) {
      throw new Error("The 'forms' array must contain exactly 3 forms.");
   }

   const lastDigit = count % 10;
   const lastTwoDigits = count % 100;

   if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return forms[2];
   if (lastDigit === 1) return forms[0];
   if (lastDigit >= 2 && lastDigit <= 4) return forms[1];
   return forms[2];
}

