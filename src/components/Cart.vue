<template>
  <div class="pt-24">
    <div v-if="cartStore.cart.length === 0" class="text-center py-8">
      <router-link to="/">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </router-link>
      <p class="mt-2 text-lg font-semibold text-gray-600">Your cart is empty</p>
    </div>
    <div
      v-if="cartStore.cart.length !== 0"
      class="flex flex-col tracking-widest"
    >
      <h2 class="text-center font-serif py-8 font-semibold">Your Cart</h2>
      <table class="w-full border-collapse border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-3 text-left">Item</th>
            <th class="p-3 text-left">Price</th>
            <th class="p-3 text-left">Quantity</th>
            <th class="p-3 text-left">Total</th>
            <th class="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cartStore.cart"
            :key="item.id"
            class="border-b border-gray-200"
          >
            <td class="p-3">{{ item.title }}</td>
            <td class="p-3">{{ item.price }}</td>
            <td class="p-3">{{ item.quantity }}</td>
            <td class="p-3">{{ item.total }}</td>
            <td>
              <button  @click="removefromcart(item)">
                <i class="pi pi-delete-left hover:text-2xl"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4">
        <div class="text-end mr-20"><span class="font-semibold ">Total Price:</span>
        <span class="font-semibold text-green-600">{{ total }}</span>
      </div>
      </div>
    </div>
  </div>
</template>
  
    
  <script>
import { useCartState } from "@/stores/cart";
import { ref } from "vue";
export default {
  setup() {
    const cartStore = useCartState();
    const total = ref(0);

    // Calculate total price
    for (let i = 0; i < cartStore.cart.length; i++) {
      total.value += parseInt(cartStore.cart[i].total);
    };

   const removefromcart=(house)=>{
      cartStore.deleteFormCart(house)
    }

    return { cartStore, total,removefromcart };
  },
};
</script>
    
  <style>
</style>
  