<script setup>
defineProps({
   data: {
      type: Object,
      required: true,
   },
});
</script>

<template>
   <WidgetsPageSectionComponent>
      <div class="content-wrapper">
         <section class="_Hero card-surface rounded-xl">
            <div class="_Content">
               <p class="_Eyebrow text-14">{{ data.eyebrow }}</p>
               <h2 class="caption-56">{{ data.title }}</h2>
               <p class="text-18 text-secondary">{{ data.description }}</p>
               <div class="_Actions">
                  <SharedButtonPrimary v-if="data.actions?.[0]" :to="data.actions[0].to">{{ data.actions[0].label }}</SharedButtonPrimary>
                  <SharedButtonSecondary v-if="data.actions?.[1]" :to="data.actions[1].to">{{ data.actions[1].label }}</SharedButtonSecondary>
               </div>
            </div>

            <div class="_Stats">
               <div v-for="item in data.stats || []" :key="item.label" class="_StatsItem background-surface rounded-md">
                  <p class="caption-32">{{ item.value }}</p>
                  <p class="text-14 text-secondary">{{ item.label }}</p>
               </div>
            </div>
         </section>
      </div>
   </WidgetsPageSectionComponent>
</template>

<style scoped lang="scss">
._Hero {
   display: grid;
   grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
   gap: var(--gap-24);
   padding: 28px;
   background:
      radial-gradient(circle at top right, rgba(90, 135, 255, 0.2), transparent 36%),
      linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%);

   ._Content {
      display: grid;
      align-content: start;
      gap: var(--gap-20);
   }

   ._Eyebrow {
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--brand-primary);
   }

   ._Actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--gap-10);
   }

   ._Stats {
      display: grid;
      gap: var(--gap-12);
   }

   ._StatsItem {
      padding: 18px;
      border: 1px solid var(--line);
   }

   @media (max-width: 991px) {
      grid-template-columns: 1fr;
   }
}
</style>

