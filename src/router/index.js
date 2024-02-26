import { createRouter, createWebHistory } from "vue-router";
import HouseList from "../components/HouseList.vue";
import House from "../components/House.vue";
import HouseDetail from "../components/HouseDetail.vue";
import About from "../components/About.vue";
import Cart from "../components/Cart.vue";
import NotFound from "../components/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HouseList",
      component: HouseList,
    },
    {
      path: "/house-detail/:id",
      name: "HouseDetail",
      component: HouseDetail,
      props: true,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
