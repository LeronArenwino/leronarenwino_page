<script setup>
import { RouterView } from "vue-router";
import YardSaleMenuComponent from "@/components/YardSaleMenuComponent.vue";
</script>

<template>
  <YardSaleMenuComponent
    :product-data="productData"
    :desktop-menu-status="desktopMenuStatus"
    :mobile-menu-status="mobileMenuStatus"
    :shopping-cart-status="shoppingCartStatus"
    :product-detail-status="productDetailStatus"
    @toggle-desktop-menu="toggleDesktopMenu"
    @toggle-mobile-menu="toggleMobileMenu"
    @toggle-shopping-cart="toggleShoppingCart"
    @close-product-detail-aside="closeProductDetail"
  ></YardSaleMenuComponent>
  <RouterView @get-product-data="openProdudctDetailAside" />
</template>

<script>
export default {
  data() {
    return {
      productData: null,
      desktopMenuStatus: true,
      mobileMenuStatus: true,
      shoppingCartStatus: true,
      productDetailStatus: true,
    };
  },
  methods: {
    setProductData(dataObject) {
      // Set product data to show
      this.productData = dataObject;
    },
    openProdudctDetailAside(data) {
      this.setProductData(data);
      this.desktopMenuStatus = true;
      this.mobileMenuStatus = true;
      this.shoppingCartStatus = true;

      this.productDetailStatus = false;
    },
    closeProductDetail() {
      this.setProductData(null);

      this.productDetailStatus = true;
    },
    toggleDesktopMenu() {
      this.mobileMenuStatus = true;
      this.shoppingCartStatus = true;
      this.closeProductDetail();

      this.desktopMenuStatus = !this.desktopMenuStatus;
    },
    toggleMobileMenu() {
      this.desktopMenuStatus = true;
      this.shoppingCartStatus = true;
      this.closeProductDetail();

      this.mobileMenuStatus = !this.mobileMenuStatus;
    },
    toggleShoppingCart() {
      this.desktopMenuStatus = true;
      this.mobileMenuStatus = true;
      this.closeProductDetail();

      this.shoppingCartStatus = !this.shoppingCartStatus;
    },
  },
};
</script>
