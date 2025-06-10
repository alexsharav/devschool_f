<template>
  <AuthForm
    authAnotherLink="/registration"
    captionForm="Авторизация"
    buttonForm="Войти"
    linkQuestion1="нет аккаунта? - "
    linkQuestion2="регистрация"
    :authFunc="login"
  />
</template>

<script setup>
import { API_SERVER } from "@/constants/API_SERVER.constants";
import router from "@/router";
import { setCookie } from "@/utils/cookie";
import AuthForm from "@/components/authComponents/AuthForm.vue";

function login(event) {
  event.preventDefault();
  fetch(API_SERVER.AUTH.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData.value),
  })
    .then((res) => res.json())
    .then((resData) => {
      const { statusCode, data, message } = resData;

      switch (statusCode) {
        case 200:
          setCookie("tkn", data.token, data.exp);
          router.push("/profile");
          break;

        default:
          alert(message);
          break;
      }
    });
}
</script>
