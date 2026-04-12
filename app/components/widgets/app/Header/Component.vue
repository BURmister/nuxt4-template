<script setup>
import { HEADER_LINKS } from '@config/db/navigation';

const route = useRoute();
const burgerMenuStore = useBurgerMenu();

watch(
   () => route.fullPath,
   () => {
      if (burgerMenuStore.isOpen) burgerMenuStore.setClose();
   },
);
</script>

<template>
   <header class="_Header">
      <div class="content-wrapper _Wrapper">
         <SharedLogoLink />

         <nav class="_Nav only-pc">
            <NuxtLink
               v-for="link in HEADER_LINKS"
               :key="link.to"
               :to="link.to"
               class="_NavLink text-14"
               :class="{ active: route.path === link.to }"
            >
               {{ link.label }}
            </NuxtLink>
         </nav>

         <button type="button" class="_Burger" @click="burgerMenuStore.setToggle()">
            {{ burgerMenuStore.isOpen ? 'Закрыть' : 'Меню' }}
         </button>
      </div>

      <Transition name="fade">
         <div v-if="burgerMenuStore.isOpen" class="_MobileMenu">
            <div class="content-wrapper _MobileMenu-Inner">
               <NuxtLink
                  v-for="link in HEADER_LINKS"
                  :key="link.to"
                  :to="link.to"
                  class="_MobileLink caption-24"
                  @click="burgerMenuStore.setClose()"
               >
                  {{ link.label }}
               </NuxtLink>
            </div>
         </div>
      </Transition>
   </header>
</template>

<style scoped lang="scss">
._Header {
   position: sticky;
   top: 0;
   z-index: 60;
   background: rgba(244, 246, 251, 0.88);
   backdrop-filter: blur(18px);
   border-bottom: 1px solid rgba(215, 223, 239, 0.8);

   ._Wrapper {
      min-height: var(--header-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gap-20);
   }

   ._Nav {
      display: flex;
      align-items: center;
      gap: var(--gap-10);
      padding: 6px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background-color: rgba(255, 255, 255, 0.72);
   }

   ._NavLink {
      padding: 10px 14px;
      border-radius: 999px;
      color: var(--text-secondary);
      font-weight: 600;
      transition: all 0.2s ease;

      &.active {
         background-color: var(--brand-primary);
         color: var(--brand-contrast);
      }
   }

   ._Burger {
      display: none;
      min-height: 40px;
      padding: 0 14px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background-color: var(--surface);
      font-weight: 600;
      color: var(--text-primary);
   }

   ._MobileMenu {
      border-top: 1px solid rgba(215, 223, 239, 0.8);
      background-color: var(--surface);

      ._MobileMenu-Inner {
         display: grid;
         gap: var(--gap-16);
         padding-top: var(--gap-20);
         padding-bottom: var(--gap-24);
      }

      ._MobileLink {
         color: var(--text-primary);
      }
   }

   @media (max-width: 991px) {
      ._Burger {
         display: inline-flex;
         align-items: center;
         justify-content: center;
      }
   }
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>

