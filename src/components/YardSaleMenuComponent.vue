<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-200 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <img src="../assets/icon_menu.svg" alt="menu" class="menu" />
      <div class="navbar-left">
        <img src="../assets/logo_yard_sale.svg" alt="logo" class="logo" />
        <ul>
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
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li>leronarenwino@example.com</li>
          <li class="navbar-shopping-cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <div></div>
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
</style>
