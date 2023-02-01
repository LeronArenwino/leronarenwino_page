<template>
  <main class="container mx-auto h-screen">
    <section class="login">
      <div class="form-container">
        <h1 class="title dark:text-white">My account</h1>
        <form action="/" class="form">
          <div>
            <label for="name" class="label dark:text-white">Name</label>
            <p class="value dark:text-white">Léron Arenwino</p>

            <label for="email" class="label dark:text-white">Email</label>
            <p class="value dark:text-white">LeronArenwino@example.com</p>

            <label for="password" class="label dark:text-white">Password</label>
            <p class="value dark:text-white">***************</p>
          </div>
          <div>
            <input
              type="submit"
              value="Edit"
              class="transition ease-in-out delay-50 border border-green-500 text-green-500 dark:border-green-300 dark:text-green-300 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 mr-2 mb-2 secondary-primary login-button"
            />
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
:root {
  --white: #ffffff;
  --black: #000000;
  --very-light-pink: #c7c7c7;
  --text-input-field: #f7f7f7;
  --hospital-green: #acd9b2;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}

.login {
  margin-top: 40px;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.form-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
}
.title {
  font-size: var(--lg);
  margin-bottom: 36px;
  text-align: start;
}
.form {
  display: flex;
  flex-direction: column;
}
.form div {
  display: flex;
  flex-direction: column;
}
.label {
  font-size: var(--sm);
  font-weight: bold;
  margin-bottom: 4px;
}
.secondary-primary {
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}
.login-button {
  margin-top: 16px;
  margin-bottom: 32px;
  cursor: pointer;
}
.value {
  font-size: var(--md);
  margin: 8px 0 32px 0;
}
@media (max-width: 640px) {
  .form-container {
    height: 100%;
  }
  .form {
    height: 100%;
    justify-content: space-between;
  }
}
</style>
