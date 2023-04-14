<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-300 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <button
          type="button"
          class="w-10 h-10 text-black bg-emerald-300 -400 hover:bg-emerald-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
        >
          <router-link to="/">
            <font-awesome-icon
              class="dark:text-white w-3 h-3"
              icon="fa-solid fa-house"
              beat
              style="--fa-animation-duration: 2s; --fa-beat-scale: 1.5"
          /></router-link>
        </button>
        <div class="flex items-center lg:order-2">
          <button
            id="theme-toggle"
            type="button"
            class="w-10 h-10 text-black bg-emerald-300 -400 hover:bg-emerald-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
            @click="getColorTheme"
          >
            <font-awesome-icon
              id="theme-toggle-dark-icon"
              icon="fa-solid fa-moon"
              class="hidden fill-current"
              beat
              style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
            />
            <font-awesome-icon
              id="theme-toggle-light-icon"
              icon="fa-solid fa-sun"
              class="hidden fill-current"
              beat
              style="--fa-animation-duration: 5s; --fa-beat-scale: 1.5"
            />
          </button>
        </div>
        <div
          v-show="$route.path == '/'"
          class="flex items-center lg:hidden lg:order-3"
        >
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center text-sm text-dark rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <font-awesome-icon class="menu" icon="fa-solid fa-bars" />
          </button>
        </div>
        <div
          v-show="$route.path == '/'"
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-default"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                href="#app"
                >Overview</a
              >
            </li>
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                href="#projects"
                >Projects</a
              >
            </li>
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                href="#skills"
                >Skills</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      colorTheme: "",
    };
  },
  methods: {
    getColorTheme() {
      if (localStorage.getItem("color-theme") === "dark") {
        this.colorTheme = "Dark theme";
      } else if (localStorage.getItem("color-theme") === "light") {
        this.colorTheme = "Light theme";
      } else {
        this.colorTheme = "Error";
      }
    },
    getColorThemeMounted() {
      if (localStorage.getItem("color-theme") === "dark") {
        this.colorTheme = "Light theme";
      } else if (localStorage.getItem("color-theme") === "light") {
        this.colorTheme = "Dark theme";
      } else {
        this.colorTheme = "Error";
      }
    },
  },
  mounted() {
    this.getColorThemeMounted();
  },
};
</script>
