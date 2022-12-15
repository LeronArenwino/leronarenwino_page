<template>
  <footer class="p-4 bg-emerald-400 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <router-link to="/"
        ><a
          class="flex justify-center items-center text-2xl font-semibold text-black dark:text-white"
          ><img
            src="../assets/logo.png"
            class="mr-3 h-6 sm:h-9"
            alt="Leron Logo"
          />
          LeronArenwino
        </a></router-link
      >
      <p class="my-6 text-gray-800 dark:text-gray-200">
        Website with all information about me.
      </p>
      <ul
        class="flex flex-wrap justify-center items-center text-gray-900 dark:text-white"
      >
        <li class="flex justify-center items-center">
          <a target="_blank" href="https://www.linkedin.com/in/leronarenwino/"
            ><font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="w-16 h-16 fill-current text-black dark:text-white mx-2"
          /></a>
        </li>
        <li class="flex justify-center items-center">
          <a target="_blank" href="https://github.com/LeronArenwino"
            ><font-awesome-icon
              icon="fa-brands fa-github"
              class="w-16 h-16 fill-current text-black dark:text-white mx-2"
          /></a>
        </li>
        <li class="flex justify-center items-center">
          <a target="_blank" href="https://twitter.com/LeronArenwino"
            ><font-awesome-icon
              icon="fa-brands fa-twitter"
              class="w-16 h-16 fill-current text-black dark:text-white mx-2"
          /></a>
        </li>
      </ul>
      <span class="text-sm text-gray-900 sm:text-center dark:text-gray-300"
        >© 2018-2022
        <a class="hover:underline"
          ><router-link to="/">Francisco Dueñas</router-link></a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
