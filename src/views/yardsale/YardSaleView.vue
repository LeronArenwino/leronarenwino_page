<script setup>
import { RouterView } from "vue-router";
import YardSaleMenuComponent from "@/components/YardSaleMenuComponent.vue";
</script>

<template>
  <YardSaleMenuComponent
    :product-data="productData"
    :is-inactive-product-detail="isInactiveProductDetail"
    @close-product-detail="closeProductDetail"
  ></YardSaleMenuComponent>
  <RouterView @get-product-data="setProductData" />
</template>

<script>
export default {
  data() {
    return {
      productData: null,
      isInactiveProductDetail: "inactive",
    };
  },
  methods: {
    setProductData(object) {
      this.productData = object.data;
      this.isInactiveProductDetail = "";
    },
    closeProductDetail() {
      this.productData = null;
      this.isInactiveProductDetail = "inactive";
    },
  },
};
</script>
