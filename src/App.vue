<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { useProjectStore } from "./stores/index";

const store = useProjectStore();

store.getProjects();
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>
