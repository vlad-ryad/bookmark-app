import { API_ROUTES, htpp } from '@/api';
import type { Category } from '@/interfaces/category.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await htpp.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  return { categories, fetchCategories };
});
