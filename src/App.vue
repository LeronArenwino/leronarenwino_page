<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();

store.getProjects();
store.getKnowledges();
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>
