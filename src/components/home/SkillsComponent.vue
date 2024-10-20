<script setup>
import { useDataStore } from "@/stores/index.js";

const store = useDataStore();
</script>

<template>
  <section id="skills" class="bg-emerald-500 dark:bg-gray-900 py-16">
    <div class="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h1
          class="my-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          <span
            class="text-transparent font-medium bg-clip-text bg-black dark:bg-white"
            >Skills</span
          >
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
                class="text-center text-xl font-bold leading-none text-gray-900 dark:text-white"
              >
                {{ skill.name }} {{ skill.emoji }}
              </h5>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <template v-for="(img, index) of skill.dataImg" :key="index">
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center justify-center space-x-8">
                      <font-awesome-icon
                        :icon="img"
                        class="w-12 h-12 fill-current text-black dark:text-white mx-2"
                      />
                      <p
                        class="text-lg font-medium text-gray-900 truncate dark:text-white"
                      >
                        {{ skill.dataName[index] }}
                      </p>
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
</template>
