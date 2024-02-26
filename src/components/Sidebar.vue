<template>
  <aside
    class="w-52 pt-10 bg-gray-50 dark:bg-gray-900 fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
  >
    <div class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchTerm"
        @input="searchHouses"
        class="w-44 mx-3 p-2 rounded-xl text-black bg-gray-200"
      />
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <h1 class="font-bold text-lg text-white py-4 text-start">Categories</h1>
        <ul
          class="space-y-2 font-medium flex flex-col justify-center items-start"
        >
          <!-- All button -->
          <li
            :class="{
              'bg-gray-200 dark:bg-gray-500': selectedCategory === null,
            }"
            class="rounded-md"
          >
            <button
              @click="selectCategory(null)"
              class="flex items-center p-2 justify-start px-3 w-32 text-gray-900 rounded-lg dark:text-white group"
            >
              <i class="pi pi-wallet"></i>
              <span class="ms-3">All</span>
            </button>
          </li>
          <!-- Individual categories -->
          <li
            v-for="category in uniqueCategories"
            :key="category.id"
            :class="{
              'bg-gray-200 dark:bg-gray-500': selectedCategory === category,
            }"
            class="rounded-md"
          >
            <button
              @click="selectCategory(category)"
              class="flex items-center p-2 justify-start px-3 w-32 text-gray-900 rounded-lg dark:text-white group"
            >
              <i class="pi pi-home"></i>

              <span class="ms-3">{{ category }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { computed, ref } from "vue";
import "primeicons/primeicons.css";

export default {
  props: ["houses"],
  setup(props, { emit }) {
    const selectedCategory = ref(null);
    const searchTerm = ref("");

    const uniqueCategories = computed(() => {
      return [...new Set(props.houses.map((house) => house.category))];
    });

    const selectCategory = (category) => {
      selectedCategory.value = category;
      emit("categorySelected", category); 
    };

    const searchHouses = () => {
      emit("search", searchTerm.value); 
    };

    return {
      selectedCategory,
      uniqueCategories,
      selectCategory,
      searchTerm,
      searchHouses,
    };
  },
};
</script>

<style>
</style>
