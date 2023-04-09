<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-300 border-gray-400 px-4 lg:px-6 py-5 dark:bg-gray-800"
    >
      <font-awesome-icon
        @click="$emit('toggle-mobile-menu')"
        class="dark:text-white menu"
        icon="fa-solid fa-bars"
      />
      <div class="navbar-left">
        <img src="../assets/logo_yard_sale.svg" alt="logo" class="logo" />
        <ul class="text-gray-500 dark:text-green-400">
          <li
            class="hover:text-gray-700 dark:hover:text-green-200 hover:border hover:border-gray-700 dark:hover:border-green-200 hover:rounded"
          >
            <a href="/">All</a>
          </li>
          <li
            class="hover:text-gray-700 dark:hover:text-green-200 hover:border hover:border-gray-700 dark:hover:border-green-200 hover:rounded"
          >
            <a href="/">Clothes</a>
          </li>
          <li
            class="hover:text-gray-700 dark:hover:text-green-200 hover:border hover:border-gray-700 dark:hover:border-green-200 hover:rounded"
          >
            <a href="/">Electronics</a>
          </li>
          <li
            class="hover:text-gray-700 dark:hover:text-green-200 hover:border hover:border-gray-700 dark:hover:border-green-200 hover:rounded"
          >
            <a href="/">Toys</a>
          </li>
          <li
            class="hover:text-gray-700 dark:hover:text-green-200 hover:border hover:border-gray-700 dark:hover:border-green-200 hover:rounded"
          >
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li
            @click="$emit('toggle-desktop-menu')"
            class="text-gray-500 dark:text-green-400 navbar-email"
          >
            leronarenwino@example.com
          </li>
          <li
            @click="$emit('toggle-shopping-cart')"
            class="navbar-shopping-cart"
          >
            <font-awesome-icon
              class="dark:text-white"
              icon="fa-solid fa-cart-shopping"
            />
            <div class="rounded-full bg-green-400 text-sm font-bold">2</div>
          </li>
        </ul>
      </div>
      <div
        ref="desktopMenu"
        class="text-dark dark:text-white bg-emerald-300 dark:bg-gray-800 desktop-menu"
        :class="{ inactive: desktopMenuStatus }"
      >
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account </a>
          </li>
          <li class="border-t border-black dark:border-white">
            <a href="/" class="text-green-600 dark:text-green-400">Sign out</a>
          </li>
        </ul>
      </div>
      <div
        class="w-full text-dark dark:text-white bg-emerald-200 dark:bg-gray-800 p-4 mobile-menu"
        :class="{ inactive: mobileMenuStatus }"
      >
        <ul>
          <li>
            <a class="font-bold" href="/">CATEGORIES</a>
          </li>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        <ul class="border-t border-black dark:border-white mt-2">
          <li class="mt-8">
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
        <ul class="mt-2">
          <li class="mt-2">
            <a href="/" class="email">leronarenwino@example.com</a>
          </li>
          <li>
            <a href="/" class="text-emerald-600 dark:text-emerald-400 sign-out"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <aside
      aria-label="YardSale Menu"
      id="shoppingCartContainer"
      class="bg-emerald-400"
      :class="{ inactive: shoppingCartStatus }"
    >
      <div class="title-container">
        <font-awesome-icon icon="fa-solid fa-caret-left" />
        <p class="title">My order</p>
      </div>

      <div class="my-order-content">
        <div class="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>

        <button
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 primary-button"
        >
          Checkout
        </button>
      </div>
    </aside>
    <template v-if="productData != null">
      <aside
        aria-label="YardSale Menu"
        id="productDetail"
        class="bg-emerald-400 product-detail"
        :class="{ inactive: productDetailStatus }"
      >
        <div
          @click="$emit('close-product-detail-aside')"
          class="product-detail-close"
        >
          <font-awesome-icon class="dark:text-white" icon="fa-solid fa-xmark" />
        </div>
        <img :src="productData.images[0]" alt="bike" />
        <div class="product-info">
          <p>${{ productData.price }}</p>
          <p>{{ productData.title }}</p>
          <p>
            {{ productData.description }}
          </p>
          <button
            class="mb-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 primary-button add-to-cart-button"
          >
            <font-awesome-icon
              class="w-4 h-4 mr-2 dark:text-white"
              icon="fa-solid fa-cart-plus"
            />
            Add to cart
          </button>
        </div>
      </aside>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  emits: [
    "toggle-desktop-menu",
    "toggle-mobile-menu",
    "toggle-shopping-cart",
    "close-product-detail-aside",
  ],
  props: {
    productData: Object || null,
    desktopMenuStatus: Boolean,
    mobileMenuStatus: Boolean,
    shoppingCartStatus: Boolean,
    productDetailStatus: Boolean,
  },
  methods: {},
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

.inactive {
  display: none;
}

/* Desktop Menu */
.desktop-menu {
  position: absolute;
  top: 44px;
  right: 32px;
  width: 140px;
  height: auto;
  border-radius: 6px;
  padding: 16px 16px 0 16px;
}

.desktop-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.desktop-menu ul li {
  text-align: end;
}

.desktop-menu ul li:not(:last-child) {
  font-weight: bold;
}

.desktop-menu ul li:last-child {
  padding-top: 20px;
}

.desktop-menu ul li:last-child a {
  font-size: var(--sm);
}

.desktop-menu ul li a {
  display: inline-block;
  margin-bottom: 16px;
}

.menu {
  cursor: pointer;
  display: none;
}

.logo {
  width: 100px;
}

/* Navbar */
.navbar-left {
  display: flex;
}

.navbar-left ul,
.navbar-right ul {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.navbar-left ul {
  margin-left: 12px;
}

.navbar-left ul li a,
.navbar-right ul li a {
  padding: 8px;
}

nav {
  display: flex;
  justify-content: space-between;
}

.navbar-email {
  cursor: pointer;
  margin-right: 12px;
}
.navbar-shopping-cart {
  cursor: pointer;
}
.navbar-shopping-cart div {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 12px;
}

.mobile-menu {
  position: absolute;
  top: 44px;
  left: 0;
}

.mobile-menu ul {
  margin: 24px 0 0;
}

.mobile-menu ul li {
  margin-bottom: 24px;
}

.email {
  font-size: var(--sm);
  font-weight: 300;
}

aside {
  width: 360px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
}

/* ShoppingCart */
#shoppingCartContainer {
  padding: 24px;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.title-container img {
  transform: rotate(180deg);
  margin-right: 14px;
}
.title {
  font-size: var(--lg);
  font-weight: bold;
}
.order {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;
}
.order p:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.order p span:nth-child(1) {
  font-size: var(--md);
  font-weight: bold;
}
.order p:nth-child(2) {
  text-align: end;
  font-weight: bold;
}
.shopping-cart {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.shopping-cart figure {
  margin: 0;
}
.shopping-cart figure img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.shopping-cart p:nth-child(2) {
  color: var(--very-light-pink);
}
.shopping-cart p:nth-child(3) {
  font-size: var(--md);
  font-weight: bold;
}

.product-detail-close {
  background: var(--white);
  width: 14px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
.product-detail-close:hover {
  cursor: pointer;
}
#productDetail > img:nth-child(2) {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}
#productDetail .product-info {
  margin: 24px 24px 0 24px;
}
#productDetail .product-info p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
#productDetail .product-info p:nth-child(2) {
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 36px;
}
#productDetail .product-info p:nth-child(3) {
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 36px;
}
.primary-button {
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}
.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  aside {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .menu {
    display: block;
  }

  .navbar-left ul {
    display: none;
  }

  .navbar-email {
    display: none;
  }

  .desktop-menu {
    display: none;
  }
}

@media (min-width: 641px) {
  .mobile-menu {
    display: none;
  }
}
</style>
