<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();
</script>

<template>
  <main class="container mx-auto bg-transparent">
    <section
      class="grid gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:px-12 h-screen place-content-center text-center"
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
        I'm a systems engineer from National University of Colombia interested
        in development of applications. I have worked on different projects,
        developed mainly with Java, Python, Javascript and C.
      </p>
    </section>
    <section
      id="portfolio"
      class="container bg-transparent dark:bg-transparent my-16"
    >
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1
            class="my-4 text-4xl leading-none text-black md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent font-medium bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
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
              class="p-6 bg-gradient-to-r to-white via-emerald-200 from-emerald-300 rounded-lg shadow-lg dark:bg-gradient-to-r dark:to-gray-800 dark:from-emerald-800 transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span
                  class="bg-emerald-100 text-emerald-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-emerald-200 dark:text-emerald-800"
                >
                  {{ project.development }}
                </span>
                <span
                  class="text-sm text-transparent bg-clip-text bg-emerald-700 dark:bg-emerald-200"
                  >{{ project.date_published.toDate().toDateString() }}</span
                >
              </div>
              <h2
                class="mb-2 text-2xl font-normal text-gray-900 dark:text-white"
              >
                <h5>{{ project.name }}</h5>
              </h2>
              <p class="mb-5 font-light text-black dark:text-gray-300">
                {{ project.description }}
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <button
                    type="button"
                    @click="redirectTo(project.link_github)"
                    class="flex justify-center items-center text-black transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-110 focus:outline-none hover:bg-emerald-100 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
                  >
                    <svg
                      class="mr-2 fill-current text-black dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    GitHub
                  </button>
                </div>
                <template v-if="project.link_website != ''">
                  <button
                    type="button"
                    @click="redirectTo(project.link_website)"
                    class="text-white transition ease-in-out delay-50 bg-emerald-400 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
    <section id="knowledge" class="bg-transparent dark:bg-transparent my-16">
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1
            class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent font-medium bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
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
          <template v-for="knowledge of store.knowledges" :key="knowledge.id">
            <div
              class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gradient-to-r to-white bg-emerald-200 from-emerald-300 rounded-lg shadow dark:bg-gradient-to-r dark:to-gray-800 dark:from-emerald-800 dark:text-white"
            >
              <h3 class="mb-4 text-2xl font-semibold">{{ knowledge.name }}</h3>
              <p class="font-light text-black sm:text-lg dark:text-gray-400">
                {{ knowledge.description }}
              </p>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <template
                  v-for="(img, index) of knowledge.dataImg"
                  :key="index"
                >
                  <li class="flex flex-col space-y-2 my-2">
                    <img
                      class="h-12"
                      :src="img"
                      :alt="'Logo de ' + knowledge.dataName[index]"
                    /><span
                      class="text-base font-medium text-black dark:text-white"
                      >{{ knowledge.dataName[index] }}</span
                    >
                    <div
                      class="bg-emerald-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      :style="{ width: knowledge.dataValue[index] + '%' }"
                    >
                      {{ knowledge.dataValue[index] + "%" }}
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </section>
    <section id="about" class="bg-transparent dark:bg-transparent my-16">
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1
            class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent font-medium bg-clip-text bg-gradient-to-r to-teal-700 from-emerald-700"
              >About me</span
            >
          </h1>
          <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
            Information about me:
          </p>
        </div>
        <div
          class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
        >
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Web development
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Design</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Automation</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Languages</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Work</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Others</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
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
