<template>
  <section v-if="loginView == true">
    <LoginView />
  </section>

  <section v-if="registerView == true">
    <RegisterView />
  </section>

  <header class="header-box">
    <router-link to="/" class="dev-head-main">дев.школа</router-link>

    <nav class="nav-bar display-main">
      <router-link to="/courses">Курсы</router-link>
      <router-link to="/tests">Тесты</router-link>
      <router-link v-if="token" to="/user-panel">Панель пользователя</router-link>
      <router-link to="/help">Поддержка</router-link>
    </nav>

    <button class="profile-box display-main" @click="profileButton">
      <p class="profile-link">Профиль</p>
    </button>

    <button class="display-button" @click=""> <!--TODO: сделать показ линейной кнопки + ее работу-->
      ═
    </button>
  </header>
</template>

<script setup>
import { getCookie } from "@/utils/cookie";
import LoginView from "@/views/auth/Login.view.vue";
import RegisterView from "@/views/auth/Register.view.vue";
import { ref } from 'vue'

const token = getCookie("tkn");
const loginView = ref(false);
const registerView = ref(false);

function profileButton() {
  if (token) {
    window.location = "/profile";
  } else {
    loginView.value = true;
  }
}

</script>

<style scoped>
.header-box {
  position: fixed;
  top: 30px;
  display: flex;
  left: 0;
  right: 0;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 99%;
  max-width: 1200px;
  min-height: 64px;
  padding: 4px 4px;
  background: rgb(245, 245, 245);
  border: 3px solid rgba(192, 191, 191, 0.644);
  border-radius: 16px;
}

.dev-head-main {
  font-size: 23px;
  font-weight: bolder;
  padding: 0px 0px 0px 30px;
  color: rgb(66, 66, 66);
  text-decoration: none;
}

.nav-bar {
  position: relative;
  display: flex;
  flex-flow: wrap;
  gap: 20px;
}

.nav-bar a {
  text-decoration: none;
  color: rgb(95, 95, 95);
  font-size: 16px;
  border: none;
  background: rgb(245, 245, 245);
  border-radius: 8px;
  padding: 15px 24px;
  transition: background 0.3s ease;
}

.nav-bar a:hover {
  background: rgba(189, 189, 189, 0.253);
  color: rgb(32, 32, 32);
}

.profile-box {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  border: none;
}

.profile-link {
  background: rgb(32, 32, 32);
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
}

.lines-image {
  height: 25px;
  width: 25px;
}

.display-button {
  border: none;
  background: none;
  display: none;
  padding: 0px 25px;
  cursor: pointer;
  font-size: 30px;

}

.profile-link:hover {
  background: #444;
}

.display-login {
  display: block;
}

@media (max-width: 930px) {
  .display-main {
    display: none;
  }

  .display-button {
    display: block;
  }
}
</style>
