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
        <article
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
            >
              Development in Java and MySQL
            </span>
            <span class="text-sm">14 days ago</span>
          </div>
          <h2
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Restaurant application</a>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            This is a desktop application developed as a final project of
            Software Engineering I, which seeks to offer the restaurant service
            of a cruise ship, implementing CRUD operations with a MYSQL
            database.
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
            <a
              href="#"
              class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </article>
        <article
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
            >
              Development in Vue, Bootstrap, HTML, JS, Spring Boot and Posgrest
            </span>
            <span class="text-sm">14 days ago</span>
          </div>
          <h2
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Wheels US</a>
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            This is a web application developed as a final project of Software
            Engineering II, which seeks to offer the service of conect
            universitary people to travel together to University or home.
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
            <a
              href="#"
              class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
