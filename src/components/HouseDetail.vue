<template>
  <div class="pt-20 mt-10 text-black h-min-screen">
    <div>
      <button
        class="py-2.5 my-2 mx-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <router-link to="/">Back to Houses</router-link>
      </button>
    </div>
    <div class="grid grid-cols-2">
      <div class=" flex overflow-auto  gap-4  px-2 mx-4">
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>
        <img :src="cartStore.singleHouse.image" alt=""  class="w-60 h-60"/>

      </div>
      <div class="flex flex-col gap-4 font-mono">
        <h1 class="font-bold text-3xl px-10">
          {{ cartStore.singleHouse.title }}
        </h1>
        <p class="text-gray-5 text-lg ">{{ cartStore.singleHouse.description }}</p>
        <div class="text-gray-5">
          <span>Category: {{ cartStore.singleHouse.category }} </span>
        </div>

        <div class="text-gray-5">
          <span>Price: ${{ cartStore.singleHouse.price }}</span>
        </div>
        <div class="flex  gap-3">
          <span class="">Quantity: </span>

          <div class="flex gap-2 bg-gray-300 p-2 rounded-3xl w-20">
            <button class="text-3xl" @click="decreaseValue">-</button>
            <span class="text-3xl">{{ val }}</span>
            <button @click="increaseValue" class="text-3xl">+</button>
          </div>
        </div>
          <button @click="addCart(cartStore.singleHouse, val)" class=" w-44 h-44  flex justify-start">
            <img src="../assets/addcart.png" alt="cart" />
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartState } from "@/stores/cart";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const cartStore = useCartState();
    cartStore.getSingleHouse(parseInt(id));
    const val = ref(1);
    const increaseValue = () => {
      val.value += 1;
    };
    const decreaseValue = () => {
      if (val.value !== 1) val.value--;
    };
    const addCart = (house, quantity) => {
      const cartHouse = { ...house, total: parseInt(house.price) * parseInt(quantity),quantity: parseInt(quantity)};

      cartStore.addToCart(cartHouse);
      // console.log(cartHouse)
    };

    return { cartStore, increaseValue, decreaseValue, val, addCart };
  },
};
</script>

<style>
</style>