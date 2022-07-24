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
        <template v-for="project of projects" :key="project.id">
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
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <span class="font-medium dark:text-white"> GitHub </span>
              </div>
              <template v-if="project.link_website != ''">
                <a
                  :href="project.link_website"
                  class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Look the project!
                </a></template
              >
            </div>
          </article></template
        >
      </div>
    </div>
  </section>
</template>

<script>
import { initializeApp } from "firebase/app";
import config from "@/utils/firebase.config.js";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const collectionName = "projects";

export default {
  name: "PortfolioView",
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    // Get a list of cities from your database
    async getProjects() {
      this.projects = [];
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.projects.push({ ...doc.data(), id: doc.id });
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>
