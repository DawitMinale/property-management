<template>
  <div>
    <Sidebar
      :houses="cartStore.houses"
      @categorySelected="onCategorySelected"
      @search="onSearch"
    />
    <div class="pt-20 pl-52">
      <h1
        class="text-center font-extrabold text-2xl py-10 border border-b-2 font-serif tracking-widest my-2"
      >
        Homes
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 space-y-2"
      >
        <div
          v-if="filteredHouses.length === 0"
          class="col-span-3 text-center text-gray-500 py-4"
        >
          <h2 class="text-xl font-bold">No Matching House Found</h2>
        </div>
        <div v-for="house in filteredHouses" :key="house.id" class="px-2">
          <House :house="house" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartState } from "@/stores/cart";
import { computed, ref } from "vue";
import Sidebar from "./Sidebar.vue";
import House from "./House.vue";

export default {
  components: { Sidebar, House },
  setup() {
    const cartStore = useCartState();
    cartStore.getHouses();

    const selectedCategory = ref(null);
    const searchTerm = ref("");

    const onCategorySelected = (category) => {
      selectedCategory.value = category;
    };

    const onSearch = (term) => {
      searchTerm.value = term;
    };

    const filteredHouses = computed(() => {
      let filtered = cartStore.houses;

      if (selectedCategory.value) {
        filtered = filtered.filter(
          (house) => house.category === selectedCategory.value
        );
      }

      if (searchTerm.value.trim() !== "") {
        const regex = new RegExp(searchTerm.value.trim(), "i");
        filtered = filtered.filter((house) => regex.test(house.title));
      }

      return filtered;
    });

    return { cartStore, filteredHouses, onCategorySelected, onSearch };
  },
};
</script>

<style>
</style>
