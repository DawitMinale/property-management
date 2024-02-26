import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartState = defineStore("cart", {
  state: () => ({
    cart: [],
    houses: [],
    singleHouse: {},
    loading: false,
    filteredHouses: [],
  }),
  getters: {
    cartTotal(state) {
      return state.cart.length;
    },
  },

  actions: {
    async getHouses() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/houses");
      const data = await response.json();
      this.houses = data;
      this.loading = false;
    },
    async getSingleHouse(id) {
      this.loading = true;
      const response = await fetch(`http://localhost:3000/houses/${id}`);
      const data = await response.json();
      this.singleHouse = data;
      this.loading = false;
    },
    addToCart(house) {
      const isInCart = this.cart.some((item) => item.id === house.id);

      if (!isInCart) {
        this.cart.push(house);
      }
    },
    deleteFormCart(house){
      if(this.cart.includes(house)){
      this.cart = this.cart.filter(item => item.id !== house.id);
      }
    },
    async findByCategory(category) {
      this.loading = true;
      const response = await fetch(
        `http://localhost:3000/houses?category=${category}`
      );
      const data = await response.json();
      this.filteredHouses = data;
      this.loading = false;
    },
    search(searchTerm) {
      return this.houses.filter((house) =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
});
