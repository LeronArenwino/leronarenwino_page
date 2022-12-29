<template>
  <header class="sticky top-0 z-50">
    <nav
      class="bg-emerald-200 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <router-link to="/">
          <a class="flex items-center">
            <img
              src="../assets/logo.png"
              class="mr-3 h-6 sm:h-9"
              alt="Leron Logo"
            /> </a
        ></router-link>
        <div class="flex items-center lg:order-2">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-default"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-white bg-emerald-700 rounded md:bg-transparent md:text-emerald-700 md:p-0 dark:text-white"
                aria-current="page"
                href="#app"
                >Home</a
              >
            </li>
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                href="#portfolio"
                >Portfolio</a
              >
            </li>
            <li>
              <a
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                href="#knowledge"
                >Knowledge</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <button
      data-tooltip-target="tooltip-left"
      data-tooltip-placement="left"
      id="theme-toggle"
      type="button"
      class="w-10 h-10 text-black bg-emerald-300 -400 hover:bg-gray-900 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-emerald-300 dark:hover:text-black rounded-lg text-sm p-2.5 fixed bottom-0 right-0 z-20 mx-2 my-2"
      @click="getColorTheme"
    >
      <font-awesome-icon
        id="theme-toggle-dark-icon"
        icon="fa-solid fa-moon"
        class="hidden fill-current"
        beat
        style="--fa-animation-duration: 2s; --fa-beat-scale: 1.5"
      />
      <font-awesome-icon
        id="theme-toggle-light-icon"
        icon="fa-solid fa-sun"
        class="hidden fill-current"
        beat
        style="--fa-animation-duration: 2s; --fa-beat-scale: 1.5"
      />
    </button>
    <div
      id="tooltip-left"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-emerald-300 dark:text-black"
    >
      {{ colorTheme }}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
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
