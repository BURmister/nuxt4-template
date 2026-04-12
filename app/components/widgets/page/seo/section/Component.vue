<script setup>
defineProps({
   data: {
      type: Object,
      default: () => ({}),
   },
});
</script>

<template>
   <WidgetsPageSectionComponent>
      <WidgetsPageSectionHeadingComponent v-if="data?.title" :caption="data.title">
         <WidgetsPageSectionHeadingLine />
      </WidgetsPageSectionHeadingComponent>
      <SharedContentHTML class="content-wrapper" :data="data?.description" />
   </WidgetsPageSectionComponent>
</template>

