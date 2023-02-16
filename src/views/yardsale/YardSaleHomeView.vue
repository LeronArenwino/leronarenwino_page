<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();
</script>

<template>
  <main class="container mx-auto main-container">
    <div class="cards-container">
      <div v-for="product in store.products" :key="product.id">
        <div class="product-card">
          <img
            @click="getProductData(product)"
            :src="product.images[0]"
            alt="Image product"
          />
          <div class="product-info">
            <div>
              <p class="dark:text-white">${{ product.price }}</p>
              <p class="text-gray-400 dark:text-gray-300">
                {{ product.title }}
              </p>
            </div>
            <figure>
              <font-awesome-icon
                class="w-8 h-8 dark:text-white"
                icon="fa-solid fa-cart-plus"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  emits: { "get-product-data": null },
  data() {
    return {};
  },
  methods: {
    getProductData(data) {
      this.$emit("get-product-data", { data });
    },
  },
};
</script>

<style scoped>
:root {
  --white: #ffffff;
  --black: #000000;
  --very-light-pink: #c7c7c7;
  --text-input-field: #f7f7f7;
  --hospital-green: #acd9b2;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}
.cards-container {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 26px;
  place-content: center;
}
.product-card {
  width: 240px;
}
.product-card img {
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;
}
.product-card .product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.product-card .product-info figure {
  margin: 0px;
}
.product-card .product-info div p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
.product-card .product-info div p:nth-child(2) {
  font-size: var(--sd);
  margin-top: 0;
  margin-bottom: 0;
}
@media (max-width: 640px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, 140px);
  }
  .product-card {
    width: 140px;
  }
  .product-card img {
    width: 140px;
    height: 140px;
  }
}
</style>
