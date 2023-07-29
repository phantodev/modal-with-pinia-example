import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const count = ref(null);
  const count2 = ref(null);

  return {
    count,
    count2,
  };
});
