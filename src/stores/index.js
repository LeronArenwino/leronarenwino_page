import { defineStore } from "pinia";
import config from "@/utils/firebase.config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const projectsCollection = "projects";
const skillsCollection = "knowledges";

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useDataStore = defineStore("data", {
  // other options...
  state: () => ({
    projects: [],
    skills: [],
    products: [],
  }),
  getters: {},
  actions: {
    async getProjects() {
      this.projects = [];
      const querySnapshot = await getDocs(collection(db, projectsCollection));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.projects.push({ ...doc.data(), id: doc.id });
      });
      this.projects.sort((a, b) => b.date_published - a.date_published);
    },
    async getSkills() {
      this.skills = [];
      const querySnapshot = await getDocs(collection(db, skillsCollection));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.skills.push({ ...doc.data(), id: doc.id });
      });
    },
    async getProducts(urlApi) {
      this.products = [];
      const response = await fetch(`${urlApi}/products?`);
      this.products = await response.json();
    },
  },
});
