<template>
    <section class="container-page">
        <div class="login-container">
            <form name="login-form">
                <button class="remover-button" @click="rmvLogin()">
                    ✖
                </button>

                <h1 class="caption-form">Авторизация</h1>

                <div class="item-form">
                    <input type="email" class="input-form" v-model="userData.login" placeholder="Логин" />
                </div>

                <div class="item-form">
                    <input type="password" class="input-form" v-model="userData.password" placeholder="Пароль" />
                </div>

                <div class="buttons-form">
                    <button class="lgn-button" @click="login()"><span style="color: white">Войти</span></button>
                    <br>
                    <router-link class="reg-link" to="/registration">
                        <span class="no-acc">нет аккаунта? - </span>
                        <span class="reg-question">регистрация</span>
                    </router-link>
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

.container-page {
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    background: rgb(245, 245, 245);
    border-radius: 18px;
    border: 2px solid rgba(160, 160, 160, 0.733);
    height: 460px;
    width: 100vw;
    max-width: 340px;
    display: flex;
    flex-flow: column wrap;
    box-shadow: 5px 10px 30px 10px rgba(61, 61, 61, 0.432);
}

.login-form {
    display: flex;
    flex-flow: column wrap;
}

.remover-button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    display: block;
    margin-left: auto;
    top: 10px;
    right: 20px;
    color:rgb(63, 63, 63);
}

.caption-form {
    padding: 40px 0px 0px 0px;
    justify-self: center;
    font-weight: bolder;
    font-size: 29px;
    color: rgb(65, 65, 65);
}

.item-form {
    justify-self: center;
    padding: 45px 0px 0px 0px;
}

.input-form {
    border: 1px solid rgb(142, 159, 199);
    border-radius: 10px;
    height: 45px;
    width: 240px;
    justify-content: center;
    background: linear-gradient(135deg, rgb(186, 193, 255), #dcb8ff);
    padding: 0px 0px 0px 30px;
}

.input-form::placeholder {
    color: rgb(102, 102, 102);
    font-weight: bolder;
}
.buttons-form {
    display: flex;
    flex-flow: column wrap;
    justify-self: center;
    padding: 55px 0px 0px 0px;
}

.lgn-button {
    border-radius: 18px;
    background-color: rgb(37, 37, 37);
    border: none;
    cursor: pointer;
    height: 40px;
}

.lgn-button:hover {
    background-color: rgb(56, 56, 56);
}

.reg-link {
    padding: 20px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-decoration-line: none;
}

.no-acc {
    color: rgb(65, 65, 65);
}

.reg-question {
    text-decoration-line: underline;
}

</style>