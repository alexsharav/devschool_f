<template>
    <section class="container">
        <div class="login-container">
            <form name="login">
                <h1 class="caption-form">Авторизация</h1>
                <button class="remover-button" @click="rmvLogin()">
                    ✖
                </button>

                <div class="item-form">
                    <label for="login">Логин</label>
                    <input type="email" id="login" v-model="userData.login" placeholder="Введите логин" />
                </div>

                <div class="item-form">
                    <label for="password">Пароль</label>
                    <input type="password" id="password" v-model="userData.password" placeholder="Введите пароль" />
                </div>

                <div class="buttons-form">
                    <button @click="login">Войти</button>
                    <router-link to="/registration">Зарегистрироваться</router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { API_SERVER } from '@/constants/API_SERVER.constants';
import router from '@/router';
import { setCookie } from '@/utils/cookie';
import { ref } from 'vue';
import loginView from '@/components/Header.vue'

const userData = ref({
    login: "",
    password: "",
});

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
                    router.push("/");
                    break;

                default:
                    alert(message);
                    break;
            }
        });
}

function rmvLogin() {
    loginView.value = false;
}

</script>

<style scoped>
.container {
    background-color: rgba(189, 189, 189, 0.205);
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
  background: white;
  border-radius: 18px;
  border-color:rgb(228, 46, 46);
 
}

.remover-button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 32px;
}
</style>