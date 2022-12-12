<script setup>
import { useProjectStore } from "@/stores/index.js";

const store = useProjectStore();
</script>

<template>
  <main class="container mx-auto bg-transparent dark:bg-gray-900">
    <section
      class="grid gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 h-screen place-content-center text-center"
    >
      <h1
        class="my-4 text-4xl text-black md:text-6xl lg:text-8xl dark:text-white font-medium"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
          >Hello, welcome!</span
        >
      </h1>
      <p
        class="mb-8 text-lg font-thin text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        I'm a system engineer student of National University of Colombia who is
        interested in development of applications. I have worked on different
        projects, developed mainly with Java, Python and C.
      </p>
    </section>
    <section id="portfolio" class="container bg-transparent dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1
            class="my-4 text-4xl leading-none text-black md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
              >Portfolio</span
            >
          </h1>
          <p class="font-light text-black sm:text-xl dark:text-gray-400">
            Projects I have worked on!
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <template v-for="project of store.projects" :key="project.id">
            <article
              class="p-6 bg-gradient-to-r to-white bg-emerald-200 from-emerald-300 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span
                  class="bg-emerald-100 text-emerald-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                >
                  {{ project.development }}
                </span>
                <span
                  class="text-sm text-transparent bg-clip-text bg-emerald-700"
                  >{{ project.date_published.toDate().toDateString() }}</span
                >
              </div>
              <h2
                class="mb-2 text-2xl font-normal text-gray-900 dark:text-white"
              >
                <h5>{{ project.name }}</h5>
              </h2>
              <p class="mb-5 font-light text-black dark:text-gray-400">
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
                    class="text-white bg-black focus:outline-none hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    GitHub
                  </button>
                </div>
                <template v-if="project.link_website != ''">
                  <button
                    type="button"
                    @click="redirectTo(project.link_website)"
                    class="text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Look the project!
                  </button>
                </template>
              </div>
            </article>
          </template>
        </div>
      </div>
    </section>
    <section id="knowledge" class="bg-transparent dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1
            class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
              >Knowledge</span
            >
          </h1>
          <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
            I know about this:
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">Programming languages</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal use & for your next project.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$29</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Team size:
                  <span class="font-semibold">1 developer</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Premium support:
                  <span class="font-semibold">6 months</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Free updates:
                  <span class="font-semibold">6 months</span></span
                >
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Get started</a
            >
          </div>
          <!-- /Pricing Card -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeView",
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
