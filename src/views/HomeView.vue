<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();
</script>

<template>
  <main class="bg-transparent mx-0">
    <section
      class="grid gap-4 py-8 px-4 lg:px-36 h-screen place-content-center text-center bg-emerald-500 dark:bg-gray-900"
    >
      <div
        class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h1
          class="my-4 text-4xl text-black md:text-6xl lg:text-8xl dark:text-white font-medium"
        >
          <span class="text-transparent bg-clip-text bg-black dark:bg-white"
            >Hello, welcome!</span
          >😉
        </h1>
        <p
          class="mb-8 text-lg font-thin text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          I'm a Systems Engineer from National University of Colombia interested
          in development of applications. I have worked on different projects,
          developed mainly with Java, Python, Javascript and C.
        </p>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        class="fill-emerald-500 dark:fill-gray-900"
        fill-opacity="1"
        d="M0,192L30,197.3C60,203,120,213,180,181.3C240,149,300,75,360,69.3C420,64,480,128,540,181.3C600,235,660,277,720,272C780,267,840,213,900,176C960,139,1020,117,1080,122.7C1140,128,1200,160,1260,186.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
    <section id="portfolio" class="bg-transparent dark:bg-transparent py-16">
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1
            class="my-4 text-4xl leading-none text-black md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="font-mono text-transparent font-medium bg-clip-text bg-black dark:bg-white"
              >Projects </span
            >😄
          </h1>
          <p class="font-light text-black sm:text-xl dark:text-gray-400">
            Projects I have worked on!
          </p>
        </div>
        <div
          class="w-full p-4 bg-emerald-500 border border-gray-200 rounded-lg shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <ol class="relative border-l border-indigo-200 dark:border-gray-700">
            <template v-for="project of store.projects" :key="project.id">
              <li class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-100 dark:text-gray-500"
                  >Released on
                  {{
                    project.date_published
                      .toDate()
                      .toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                  }}</time
                >
                <h3
                  class="text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  {{ project.name
                  }}<span
                    class="bg-blue-100 text-emerald-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-emerald-900 dark:text-emerald-300 ml-3"
                    >Development with {{ project.development }}</span
                  >
                </h3>
                <p
                  class="mb-4 text-base font-normal text-white dark:text-gray-400"
                >
                  {{ project.description }}
                </p>
                <div class="flex items-center space-x-4">
                  <template
                    v-if="
                      project.link_github != '' &&
                      project.hasOwnProperty('link_github')
                    "
                    ><button
                      type="button"
                      @click="redirectTo(project.link_github)"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <font-awesome-icon
                        icon="fa-brands fa-github"
                        class="w-4 h-4 fill-current text-black dark:text-white mr-2"
                        beat
                        style="--fa-animation-duration: 5s"
                      />
                      GitHub
                    </button>
                  </template>
                  <template
                    v-if="
                      project.link_website != '' &&
                      project.hasOwnProperty('link_website')
                    "
                  >
                    <button
                      type="button"
                      @click="redirectTo(project.link_website)"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Look the project
                      <font-awesome-icon
                        class="ml-2"
                        icon="fa-solid fa-arrow-right"
                      />
                    </button>
                  </template>
                </div>
              </li>
            </template>
          </ol>
        </div>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        class="fill-emerald-500 dark:fill-gray-900"
        fill-opacity="1"
        d="M0,192L30,197.3C60,203,120,213,180,181.3C240,149,300,75,360,69.3C420,64,480,128,540,181.3C600,235,660,277,720,272C780,267,840,213,900,176C960,139,1020,117,1080,122.7C1140,128,1200,160,1260,186.7C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
    <section id="skills" class="bg-emerald-500 dark:bg-gray-900 py-16">
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1
            class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            <span
              class="text-transparent font-medium bg-clip-text bg-black dark:bg-white"
              >Skills</span
            >🤓
          </h1>
          <p class="mb-5 font-light text-black sm:text-xl dark:text-gray-400">
            I know about this:
          </p>
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-around place-items-center"
        >
          <template v-for="skill of store.skills" :key="skill.id">
            <div
              class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex items-center justify-center mb-4">
                <h5
                  class="text-xl font-bold leading-none text-gray-900 dark:text-white"
                >
                  {{ skill.name }}
                </h5>
              </div>
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <template v-for="(img, index) of skill.dataImg" :key="index">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-8">
                        <div class="flex-shrink-0">
                          <font-awesome-icon
                            :icon="img"
                            class="w-12 h-12 fill-current text-black dark:text-white mx-2"
                          />
                        </div>
                        <div class="flex-1 min-w-0">
                          <p
                            class="text-lg font-medium text-gray-900 truncate dark:text-white"
                          >
                            {{ skill.dataName[index] }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </template>
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
