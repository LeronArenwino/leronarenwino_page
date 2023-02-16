<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { useDataStore } from "@/stores/index.js";

// API URL
const API = "https://api.escuelajs.co/api/v1";

const store = useDataStore();

store.getProjects();
store.getKnowledges();
store.getProducts(API);
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>
