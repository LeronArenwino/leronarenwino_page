<template>
  <main class="container mx-auto main-container">
    <div class="cards-container">
      <div v-for="item in products" :key="item.id">
        <div class="product-card">
          <img :src="item.images[0]" alt="Image product" />
          <div class="product-info">
            <div>
              <p class="dark:text-white">{{ item.title }}</p>
              <p class="text-gray-400 dark:text-gray-300">${{ item.price }}</p>
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
// API URL
const API = "https://api.escuelajs.co/api/v1";

// Elements
const desktopMenu = document.getElementById("desktop-menu");
const mobileMenu = document.getElementById("mobile-menu");
const productDetail = document.getElementById("product-detail");

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    toggleDesktopMenu() {
      const isProductDetailClosed =
        productDetail.classList.contains("inactive");

      if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
      }

      desktopMenu.classList.toggle("inactive");
    },
    toggleMobileMenu() {
      const isProductDetailClosed =
        productDetail.classList.contains("inactive");

      if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
      }

      mobileMenu.classList.toggle("inactive");
    },
    toggleProductDetail() {
      const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
      const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

      if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
      }
      if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
      }

      productDetail.classList.toggle("inactive");
    },
    async fetchData(urlApi) {
      const response = await fetch(urlApi);
      const data = await response.json();
      return data;
    },
    async getProducts(urlApi) {
      this.products = [];
      this.products = await this.fetchData(`${urlApi}/products?`);
    },
  },
  mounted() {
    this.getProducts(API);
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
}
.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.product-info figure {
  margin: 0px;
}
.product-info div p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
.product-info div p:nth-child(2) {
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
