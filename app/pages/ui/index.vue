<script setup>
const group = 'ui-demo-selection';
const demoItems = [
   { id: 1, label: 'Фильтр: Новинки' },
   { id: 2, label: 'Фильтр: В наличии' },
   { id: 3, label: 'Фильтр: Скидка' },
];

const selectionStore = useSelectionStore();
const confirmStore = useConfirm();

onMounted(() => {
   demoItems.forEach((item) => selectionStore.registerItem(group, item.id));
});

onBeforeUnmount(() => {
   selectionStore.clearGroup(group);
});

const selectedIds = computed(() => selectionStore.getSelected(group));
const allSelected = computed(() => selectionStore.allSelected(group));

const openConfirm = async () => {
   const accepted = await confirmStore.open({
      title: 'Очистить выбор?',
      description: 'Это демонстрация глобальной confirm modal архитектуры через store + provider.',
      confirmText: 'Очистить',
      cancelText: 'Оставить',
   });

   if (accepted) {
      selectionStore.setAll(group, false);
   }
};

const { $defaultMeta } = useNuxtApp();
useSeoMeta({
   ...$defaultMeta,
   title: 'UI sandbox | Nuxt 4 Template',
   ogTitle: 'UI sandbox | Nuxt 4 Template',
});
</script>

<template>
   <WidgetsPageLayoutComponent class="detail" caption="UI sandbox">
      <WidgetsAppBottomTabsExtra>
         <SharedButtonPrimary @click="openConfirm">Confirm modal</SharedButtonPrimary>
      </WidgetsAppBottomTabsExtra>

      <WidgetsPageSectionComponent>
         <WidgetsPageBreadcrumbsComponent :items="[{ label: 'UI sandbox' }]" />
         <WidgetsPageSectionHeadingComponent caption="UI sandbox" big>
            <WidgetsPageSectionHeadingLine />
         </WidgetsPageSectionHeadingComponent>
      </WidgetsPageSectionComponent>

      <WidgetsPageSectionComponent>
         <div class="content-wrapper _Grid">
            <article class="_Card card-surface rounded-lg">
               <p class="caption-24">Кнопки</p>
               <div class="_Buttons">
                  <SharedButtonPrimary>Primary button</SharedButtonPrimary>
                  <SharedButtonSecondary>Secondary button</SharedButtonSecondary>
               </div>
            </article>

            <article class="_Card card-surface rounded-lg">
               <p class="caption-24">Selection store</p>
               <div class="_Selection">
                  <label v-for="item in demoItems" :key="item.id" class="_SelectionRow">
                     <input
                        type="checkbox"
                        :checked="selectionStore.isSelected(group, item.id)"
                        @change="selectionStore.setSelected(group, item.id, $event.target.checked)"
                     />
                     <span class="text-16">{{ item.label }}</span>
                  </label>
               </div>
               <div class="_Buttons">
                  <SharedButtonSecondary @click="selectionStore.setAll(group, !allSelected)">
                     {{ allSelected ? 'Снять все' : 'Выбрать все' }}
                  </SharedButtonSecondary>
                  <p class="text-14 text-secondary">Выбрано: {{ selectedIds.length }}</p>
               </div>
            </article>
         </div>
      </WidgetsPageSectionComponent>
   </WidgetsPageLayoutComponent>
</template>

<style scoped lang="scss">
._Grid {
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: var(--gap-20);

   @media (max-width: 991px) {
      grid-template-columns: 1fr;
   }
}

._Card {
   display: grid;
   gap: var(--gap-16);
   padding: 24px;
}

._Buttons {
   display: flex;
   flex-wrap: wrap;
   gap: var(--gap-10);
   align-items: center;
}

._Selection {
   display: grid;
   gap: var(--gap-12);
}

._SelectionRow {
   display: flex;
   align-items: center;
   gap: var(--gap-10);
}
</style>

