<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-200 border-gray-400 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <font-awesome-icon
        @click="toggleMobileMenu"
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
            @click="toggleDesktopMenu"
            class="text-gray-500 dark:text-green-400 navbar-email"
          >
            leronarenwino@example.com
          </li>
          <li @click="toggleProductDetail" class="navbar-shopping-cart">
            <font-awesome-icon
              class="dark:text-white"
              icon="fa-solid fa-cart-shopping"
            />
            <div class="rounded-full bg-green-400 text-sm font-bold">2</div>
          </li>
        </ul>
      </div>
      <div
        id="desktop-menu"
        class="text-dark dark:text-white bg-emerald-300 dark:bg-gray-800 desktop-menu"
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
        id="mobile-menu"
        class="w-full h-screen text-dark dark:text-white bg-emerald-200 dark:bg-gray-800 p-4 mobile-menu inactive"
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
        <ul class="border-t border-dark mt-2">
          <li class="mt-2">
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
        <ul class="border-t border-dark mt-2">
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
    <aside id="product-detail" class="bg-emerald-400 product-detail inactive">
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

        <button class="primary-button">Checkout</button>
      </div>
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleDesktopMenu() {
      const productDetail = document.getElementById("product-detail");
      const isProductDetailClosed =
        productDetail.classList.contains("inactive");

      const desktopMenu = document.getElementById("desktop-menu");
      if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
      }

      desktopMenu.classList.toggle("inactive");
    },
    toggleMobileMenu() {
      const productDetail = document.getElementById("product-detail");
      const isProductDetailClosed =
        productDetail.classList.contains("inactive");

      const mobileMenu = document.getElementById("mobile-menu");
      if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
      }

      mobileMenu.classList.toggle("inactive");
    },
    toggleProductDetail() {
      const mobileMenu = document.getElementById("mobile-menu");
      const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

      const desktopMenu = document.getElementById("desktop-menu");
      const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

      const productDetail = document.getElementById("product-detail");

      if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
      }
      if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
      }

      productDetail.classList.toggle("inactive");
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

.product-detail {
  width: 360px;
  padding: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
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
.primary-button {
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}
@media (max-width: 640px) {
  .product-detail {
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
