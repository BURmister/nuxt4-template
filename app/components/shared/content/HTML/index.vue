<script setup>
defineProps({
   data: {
      type: String,
      default: '',
   },
});
</script>

<template>
   <div class="_ContentHTML text-16" v-html="data"></div>
</template>

<style lang="scss">
._ContentHTML {
   display: grid;
   gap: var(--gap-20);

   h2,
   h3,
   h4 {
      margin-top: var(--gap-12);
      color: var(--text-primary);
      font-size: 24px;
      line-height: 1.15;

      @media (max-width: 575px) {
         font-size: 20px;
      }
   }

   p,
   li {
      color: var(--text-secondary);
      font-size: 18px;
      line-height: 1.6;

      @media (max-width: 575px) {
         font-size: 16px;
      }
   }

   ul {
      display: grid;
      gap: var(--gap-8);
      list-style: disc;
      padding-left: 22px;
   }

   a {
      color: var(--brand-primary);
      text-decoration: underline;
   }
}
</style>

