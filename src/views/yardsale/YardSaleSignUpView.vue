<template>
  <main class="h-screen">
    <section class="login">
      <div class="form-container">
        <h1 class="title dark:text-white">My account</h1>
        <form action="/" class="form">
          <label for="name" class="label dark:text-white">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Leron"
            class="input input-name"
          />
          <label for="email" class="label dark:text-white">Email</label>
          <input
            type="text"
            id="email"
            placeholder="leronarenwino@example.com"
            class="input input-email"
          />
          <label for="password" class="label dark:text-white">Password</label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            class="input input-password"
          />
          <input
            type="submit"
            value="Create"
            class="text-white transition ease-in-out delay-50 bg-emerald-400 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-2 mb-2 button-primary login-button"
          />
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
.label {
  font-size: var(--sm);
  font-weight: bold;
  margin-bottom: 4px;
}
.input {
  border: none;
  border-radius: 8px;
  height: 32px;
  font-size: var(--md);
  padding: 8px;
  margin-bottom: 12px;
}
.input-name,
.input-email,
.input-password {
  margin-bottom: 22px;
}
.button-primary {
  border-radius: 8px;
  border: none;
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
@media (max-width: 640px) {
}
</style>
