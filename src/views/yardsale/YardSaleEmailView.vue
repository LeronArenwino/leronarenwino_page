<template>
  <section class="login">
    <div class="form-container">
      <img src="../../assets/logo_yard_sale.svg" alt="logo" class="logo" />
      <h1 class="title">Email has been sent!</h1>
      <p class="subtitle">
        Please check your inbox for instrucions on how to reset the password
      </p>
      <div class="email-image">
        <img src="../../assets/email.svg" alt="email" />
      </div>
      <button
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-primary login-button"
      >
        Login
      </button>
      <p class="resend">
        <span>Didn't receive the emaild?</span><a href="/">Resend</a>
      </p>
    </div>
  </section>
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
  color: var(--very-light-pink);
  font-size: var(--md);
  font-weight: 300;
  margin-bottom: 32px;
  text-align: center;
}
.email-image {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background-color: var(--text-input-field);
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
  color: var(--hospital-green);
  text-decoration: none;
}
.button-primary {
  background-color: var(--hospital-green);
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
