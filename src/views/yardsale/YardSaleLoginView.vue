<template>
  <main class="container mx-auto h-screen">
    <section class="login">
      <div class="form-container">
        <img src="../../assets/logo_yard_sale.svg" alt="logo" class="logo" />
        <form action="/" class="form">
          <label for="email" class="label dark:text-white">Email address</label>
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
            value="Log in"
            class="text-white transition ease-in-out delay-50 bg-emerald-400 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-2 mb-2 button-primary login-button"
          />
          <a href="/" class="text-green-500 dark:text-green-300"
            >Forgot my password</a
          >
        </form>
        <button
          class="secondary-button signup-button border border-green-500 text-green-500 dark:border-green-300 dark:text-green-300"
        >
          Sign up
        </button>
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
.logo {
  width: 150px;
  margin-bottom: 48px;
  justify-self: center;
  display: none;
}
.form {
  display: flex;
  flex-direction: column;
}
.form a {
  font-size: var(--sm);
  text-align: center;
  text-decoration: none;
  margin-bottom: 52px;
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
.input-email {
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
.secondary-button {
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
@media (max-width: 640px) {
  .logo {
    display: block;
  }
  .secondary-button {
    width: 300px;
    position: absolute;
    bottom: 0;
    margin-bottom: 24px;
  }
}
</style>
