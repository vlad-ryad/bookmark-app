<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/categories.store';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CategoryHeader from '@/components/CategoryHeader.vue';

const route = useRoute();
const categoryStore = useCategoryStore();
const category = ref<Category>();
const bookmarkStore = useBookmarkStore();

onMounted(() => {
  const alias = route.params.alias;
  if (alias && typeof alias === 'string') {
    category.value = categoryStore.getCategoryByAlias(alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  }
});

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (newValue) => {
    const alias = newValue.alias;
    if (alias && typeof alias === 'string') {
      category.value = categoryStore.getCategoryByAlias(alias);

      if (category.value) {
        bookmarkStore.fetchBookmarks(category.value.id);
      }
    }
  },
  { immediate: true },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />

  <!-- {{ category?.name }}
  {{ bookmarkStore.bookmarks.length }} -->
</template>
