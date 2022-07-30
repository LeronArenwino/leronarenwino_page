import { defineStore } from "pinia";
import config from "@/utils/firebase.config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const collectionName = "projects";

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjectStore = defineStore("projects", {
  // other options...
  state: () => ({
    projects: [],
  }),
  getters: {},
  actions: {
    async getProjects() {
      this.projects = [];
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.projects.push({ ...doc.data(), id: doc.id });
      });
    },
  },
});
