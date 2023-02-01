<template>
  <main class="container mx-auto h-screen">
    <section class="login">
      <div class="form-container">
        <img src="../../assets/logo_yard_sale.svg" alt="logo" class="logo" />
        <h1 class="title text-black dark:text-white">Email has been sent!</h1>
        <p class="subtitle text-black dark:text-white">
          Please check your inbox for instrucions on how to reset the password
        </p>
        <div class="email-image bg-green-400 dark:bg-green-500">
          <font-awesome-icon
            icon="fa-regular fa-envelope"
            class="w-16 h-16 fill-current text-white dark:text-white"
          />
        </div>
        <button
          class="text-white transition ease-in-out delay-50 bg-emerald-400 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-2 mb-2 button-primary login-button"
        >
          Login
        </button>
        <p class="resend text-black dark:text-white">
          <span>Didn't receive the emaild?</span> <a href="/">Resend</a>
        </p>
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
  justify-items: center;
}
.logo {
  width: 150px;
  margin-bottom: 48px;
  justify-self: center;
  display: none;
}
.title {
  font-size: var(--lg);
  margin-bottom: 12px;
  text-align: center;
}
.subtitle {
  font-size: var(--md);
  font-weight: 300;
  margin-bottom: 32px;
  text-align: center;
}
.email-image {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.email-image img {
  width: 80px;
}
.resend {
  font-size: var(--sm);
}
.resend span {
  color: var(--very-light-pink);
}
.resend a {
  text-decoration: none;
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
}
@media (max-width: 640px) {
  .logo {
    display: block;
  }
}
</style>
