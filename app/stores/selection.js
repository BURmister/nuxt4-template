export const useSelectionStore = defineStore('selectionStore', () => {
   const groupItems = useState('selectionGroupItems', () => ({}));
   const selectedIds = useState('selectionSelectedIds', () => ({}));

   const normalizeId = (id) => (id == null ? null : String(id));

   const ensureGroup = (group) => {
      if (!group) return;
      if (!groupItems.value[group]) groupItems.value[group] = [];
      if (!selectedIds.value[group]) selectedIds.value[group] = [];
   };

   const registerItem = (group, id) => {
      const key = normalizeId(id);
      if (!group || !key) return;
      ensureGroup(group);

      if (!groupItems.value[group].includes(key)) {
         groupItems.value[group] = [...groupItems.value[group], key];
      }
   };

   const isSelected = (group, id) => {
      const key = normalizeId(id);
      if (!group || !key) return false;
      return (selectedIds.value[group] || []).includes(key);
   };

   const getSelected = (group) => {
      if (!group) return [];
      return selectedIds.value[group] || [];
   };

   const getItems = (group) => {
      if (!group) return [];
      return groupItems.value[group] || [];
   };

   const allSelected = (group) => {
      const items = getItems(group);
      return items.length > 0 && items.every((id) => getSelected(group).includes(id));
   };

   const setSelected = (group, id, value) => {
      const key = normalizeId(id);
      if (!group || !key) return;
      ensureGroup(group);

      if (value) {
         if (!selectedIds.value[group].includes(key)) {
            selectedIds.value[group] = [...selectedIds.value[group], key];
         }
         return;
      }

      selectedIds.value[group] = selectedIds.value[group].filter((item) => item !== key);
   };

   const setAll = (group, value) => {
      if (!group) return;
      ensureGroup(group);
      selectedIds.value[group] = value ? [...getItems(group)] : [];
   };

   const clearGroup = (group) => {
      if (!group) return;
      groupItems.value[group] = [];
      selectedIds.value[group] = [];
   };

   return {
      groupItems,
      selectedIds,
      registerItem,
      isSelected,
      getSelected,
      getItems,
      allSelected,
      setSelected,
      setAll,
      clearGroup,
   };
});

