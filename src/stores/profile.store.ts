import { API_ROUTES, htpp } from '@/api';
import type { Profile } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const { data } = await htpp.get<Profile>(API_ROUTES.profile);
    profile.value = data;
  }

  return { profile, fetchProfile };
});
