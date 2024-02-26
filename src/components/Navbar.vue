<template>
  <nav
    class="dark:bg-gray-900 fixed w-full pl-56 h-20 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="flex justify-end pt-4 items-center">
      <!-- <div class="flex gap-4">
        <router-link
          to="/"
          class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          >Houses</router-link
        >
        <router-link
          to="/about"
          class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >About</router-link
        >
      </div> -->
      <div class="mr-10 text-white">
        <router-link to="/cart" class="flex gap-2">
          <span>Cart</span>
          <div>
            <i class="pi pi-shopping-cart" style="font-size: 2rem"></i>

            <span
              class="relative font-bold p-1 text-blue-500 right-3 bottom-5"
              >{{ cartStore.cart.length }}</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCartState } from '@/stores/cart';
export default {
  setup() {
    const cartStore = useCartState();
    return { cartStore };
  },
};
</script>

<style>
</style>