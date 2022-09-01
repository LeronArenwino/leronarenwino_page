<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <router-link to="/"
        ><a
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          ><img
            src="../assets/logo.png"
            class="mr-3 h-6 sm:h-9"
            alt="Leron Logo"
          />
          LeronArenwino
        </a></router-link
      >
      <p class="my-6 text-gray-500 dark:text-gray-400">
        Website with all information about me.
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <a class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Blog</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">FAQs</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2018-2022
        <a class="hover:underline"
          ><router-link to="/">Francisco Dueñas</router-link></a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
