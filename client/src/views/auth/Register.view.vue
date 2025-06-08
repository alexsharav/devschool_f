<template>
    <AuthForm authAnotherLink="/login" captionForm="Регистрация"
              buttonForm="Зарегистрироваться" linkQuestion1="есть аккаунт? - "
              linkQuestion2="авторизация" :authFunc=registration />
</template>

<script setup>
import { API_SERVER } from '@/constants/API_SERVER.constants';
import router from '@/router';
import { setCookie } from '@/utils/cookie';
import AuthForm from '@/components/authComponents/AuthForm.vue';

function registration(event) {
    event.preventDefault();
    fetch(API_SERVER.AUTH.REGISTRATION, {
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
                case 201:
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