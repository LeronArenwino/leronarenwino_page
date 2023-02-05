<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-200 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <img src="../assets/icon_menu.svg" alt="menu" class="menu" />
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
          <li class="text-gray-500 dark:text-green-400 navbar-email">
            leronarenwino@example.com
          </li>
          <li class="navbar-shopping-cart">
            <font-awesome-icon
              class="dark:text-white"
              icon="fa-solid fa-cart-shopping"
            />
            <div class="rounded-full bg-green-400 text-sm font-bold">2</div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="hidden border border-black desktop-menu">
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account </a>
        </li>
        <li class="border-t border-black">
          <a href="/" class="text-green-300">Sign out</a>
        </li>
      </ul>
    </div>
  </header>
</template>
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
.desktop-menu {
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
  display: none;
}
.logo {
  width: 100px;
}
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
  margin-right: 12px;
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
}
</style>
