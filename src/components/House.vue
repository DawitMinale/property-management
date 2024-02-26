<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-[#E0F2F1] dark:bg-gray-800 dark:border-gray-700 h-[520px]">
    <a href="#">
      <img class="rounded-t-lg h-52 w-full" :src="house.image" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400"
        >
          {{ house.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ house.description }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ house.category }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ${{ house.price }}
      </p>

      <div class="flex justify-between text-green-500 py-3">
        <router-link :to="`/house-detail/${house.id}`">
          <button class="">Buy Now</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["house"],
};
</script>

<style>
</style>