<script setup>
import { useProjectStore } from "@/stores/index.js";

const store = useProjectStore();
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Portfolio
        </h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Projects I have worked on!
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <template v-for="project of store.projects" :key="project.id">
          <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
              >
                {{ project.development }}
              </span>
              <span class="text-sm">{{
                project.date_published.toDate().toDateString()
              }}</span>
            </div>
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="">{{ project.name }}</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              {{ project.description }}
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Logo GitHub"
                />
                <button
                  type="button"
                  @click="redirectTo(project.link_github)"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  GitHub
                </button>
              </div>
              <template v-if="project.link_website != ''">
                <button
                  type="button"
                  @click="redirectTo(project.link_website)"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Look the project!
                </button>
              </template>
            </div>
          </article></template
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioView",
  components: {},
  data() {
    return {};
  },
  methods: {
    redirectTo(url) {
      if (url.includes("http")) {
        window.open(url, "_blank");
      } else {
        this.$router.push(url);
      }
    },
  },
};
</script>
