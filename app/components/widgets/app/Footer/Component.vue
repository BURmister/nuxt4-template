<script setup>
import { CONTACT_ITEMS, FOOTER_LINKS } from '@config/db/navigation';
</script>

<template>
   <footer class="_Footer">
      <div class="content-wrapper _Wrapper">
         <div class="_Column">
            <SharedLogoLink />
            <p class="text-14 text-secondary">Минимальный каркас проекта с локальным API и понятной структурой папок.</p>
         </div>

         <div class="_Column">
            <p class="_Caption text-14">Навигация</p>
            <NuxtLink v-for="link in FOOTER_LINKS" :key="link.to" :to="link.to" class="text-16 text-secondary">
               {{ link.label }}
            </NuxtLink>
         </div>

         <div class="_Column">
            <p class="_Caption text-14">Контакты</p>
            <a v-for="item in CONTACT_ITEMS" :key="item.title" :href="getHref(item.value)" class="text-16 text-secondary">
               {{ item.value }}
            </a>
         </div>
      </div>
   </footer>
</template>

<style scoped lang="scss">
._Footer {
   padding: var(--gap-48) 0;
   border-top: 1px solid var(--line);
   background-color: rgba(255, 255, 255, 0.64);

   ._Wrapper {
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr;
      gap: var(--gap-24);
   }

   ._Column {
      display: grid;
      align-content: start;
      gap: var(--gap-12);
   }

   ._Caption {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
   }

   @media (max-width: 991px) {
      display: none;
   }
}
</style>

